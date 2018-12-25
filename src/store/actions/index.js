import { SET_LANG, LOAD_NOTICE } from './types';
export const setLang = lang => {
  return {
    type: SET_LANG,
    lang,
  };
};

export function loadNotice(noticeList) {
  return {
    type: LOAD_NOTICE,
    noticeList,
  };
}
