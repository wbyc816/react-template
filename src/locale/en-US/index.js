import en_US from 'antd/lib/locale-provider/en_US';
import en from 'react-intl/locale-data/en';
import global from './global'; 
import user from './user';
import {flattenObject} from '@/utils';

export default {
  messages: {...en_US,...flattenObject({...global,user})},

  // locale
  locale: 'en-US',

  // react-intl locale-data
  data: en,

  // 自定义 formates
  formats: {
    
  }
};