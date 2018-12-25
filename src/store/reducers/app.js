import {SET_LANG} from '../actions/types';

const initialState = {
  lang:'zh-CN'
};

export default function (state=initialState,action){
  switch (action.type) {
    case SET_LANG: {
      return {...state,lang:action.lang};
    }
    default: {
      return state;
    }
  }
}