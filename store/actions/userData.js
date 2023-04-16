import {types} from './types';

export function getUserData(userNumber) {
  return {
    type: types.GET_USER_DATA,
    payload: {userNumber},
  };
}

export function userDataSucess(user) {
  console.log('The fab data is user');
  return {
    type: types.GET_USER_DATA_SUCCESS,
    payload: user,
  };
}

export function userDataFailure(error) {
  return {
    type: types.GET_USER_DATA_FAILURE,
    payload: error,
  };
}

//COUNT
export function changeCount(increaseBy, itemCount, totalPrice) {
  return {
    type: types.CHANGE_IN_COUNT,
    payload: {increaseBy, itemCount, totalPrice},
  };
}

//COUNT TOTAL PRICE
export function countTotalPrice(itemPrice, totalPrice) {
  return {
    type: types.COUNT_TOTALPRICE,
    payload: {totalPrice, itemPrice},
  };
}
