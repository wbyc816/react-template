import zh_CN from 'antd/lib/locale-provider/zh_CN';
import zh from 'react-intl/locale-data/zh';
import global from './global'; 
import user from './user';
import {flattenObject} from '@/utils';

export default {
  messages: {...zh_CN,...flattenObject({...global,user})},

  // locale
  locale: 'zh-CN',

  // react-intl locale-data
  data: zh,

  // 自定义 formates
  formats: {
    
  }
};
