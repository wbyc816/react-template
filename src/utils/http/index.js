import axios from 'axios';
import config from '@/constants/config';
// import message from '@/components';
// import Auth from '@common/models/auth';
import store from '@/store';


let instance;

function createInstance () {
  instance = axios.create({
    baseURL: config.baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
    responseType: 'json',
    validateStatus: function (status) {
      return status >= 200 && status <= 500;
    }
  });
  instance.interceptors.request.use(config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        locale: store.getState().app.lang,
        device: 'pc'
      }
    };
  });
  // instance.interceptors.request.use(checkAuth);
  // instance.interceptors.request.use(getNocache);
  // instance.interceptors.response.use(checkError);
}

// const noRefreshTokenURL = [
//   '/api/v1/user/refreshToken'
// ];

// const checkAuth = async config => {
//   const { expireTime, token } = Auth.state;
//   let finallyToken = token;
//   if (!token || !expireTime) {
//     return config;
//   }

//   let { expire, time } = expireTime;
//   let nowTime = +new Date();
//   let activeTime = (nowTime - time);

//   if (activeTime < expire) {
//     if (activeTime > (0.8 * expire) && noRefreshTokenURL.indexOf(config.url) === -1) {
//       await Auth.refreshToken();
//       finallyToken = Auth.state.token;
//     }
//   } else {
//     Auth.exceedTime();
//   }

//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       authorization: finallyToken
//     }
//   };
// };

// const getNocache = config => {
//   if (config.method === 'get') {
//     const params = config.params || {};
//     params['_t'] = +new Date();
//     config.params = { ...params };
//   }
//   return config;
// };

// // 错误处理拦截器
// const checkError = res => {
//   let errorMsg = i18n.t('networkError');
//   const { errcode, errmsg } = res.data;
//   if (errmsg) errorMsg = errmsg;
//   if (res.status === 200 && errcode === 0) return res.data;
//   if ([300005, 300006, 300007, 300008].indexOf(errcode) !== -1) {
//     Auth.exceedTime();
//     if (config.isCheckLoginPage()) {
//       message.error( errorMsg, 3000);
//       setTimeout(() => {
//         window.location.replace('/signin?to=' + window.location.pathname);
//       }, 500);
//     }
//   } else if (errcode === 300099) { // 版本刷新
//     window.location.reload(true);
//   } else {
//     message.error( errorMsg, 3000);
//   }

//   const httpError = new Error(errorMsg);
//   httpError.code = errcode || res.status;
//   httpError.message = errorMsg;
//   throw httpError;
// };


const http = {};
['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
  http[method] = (url, data, config) => {
    if (!instance) createInstance();
    return instance.request({
      url,
      method,
      data,
      params: method === 'get' ? data : {},
      ...config
    }).then(res => res.data);
  };
});

http.upload = function (url, files, params = {}, config = {}) {
  const formData = new FormData();
  const name = config.name || 'file';
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      formData.append(name, files[i], files[i].othername || files[i].name);
    }
  } else {
    formData.append(name, files);
  }
  return http.post(url, formData, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default http;
