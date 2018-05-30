import {SAVE_USER_INFO} from './actionTypes';

export default (state= {}, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        userinfo : action.info
      };
    default:
      return state
  }
}