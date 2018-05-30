import {SAVE_USER_INFO} from './actionTypes'
import {get} from '../../config/fetch'

export const getUserInfo = (id) => async (dispatch, getState) => {
  try {
    let response = await get('http://localhost:8888/layoutInfo.json');
    await dispatch(saveUserInfo(response.data))
  } catch (error) {
    console.log('error: ', error)
  }
};

const saveUserInfo = (info) => ({
  type: SAVE_USER_INFO,
  info
});
