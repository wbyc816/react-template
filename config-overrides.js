const fs = require('fs');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

// 获取less全局变量
function getLessVariables(file) {
  let themeContent = fs.readFileSync(file, 'utf-8');
  let variables = {};
  themeContent.split('\n').forEach(function(item) {
      if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
          return;
      }
      let _pair = item.split(':');
      if (_pair.length < 2) return;
      let key = _pair[0].replace('\r', '').replace('@', '');
      if (!key) return;
      let value = _pair[1].replace(';', '').replace('\r', '').replace(/^\s+|\s+$/g, '');
      variables[key] = value;
  });
  return variables;
}

module.exports = function override(config, env) {
  // 组件按需加载
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es' }], config);
  // less支持
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    globalVars: getLessVariables(path.resolve(__dirname, `${paths.appSrc}/assets/vars.less`))
  })(config, env);
  // 别名设置
  config = rewireAliases.aliasesOptions({
		'@': path.resolve(__dirname, `${paths.appSrc}/`)
	})(config, env);
  return config;
};
