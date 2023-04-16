import {types} from '../actions/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getData} from '../../services/firestore';
import {changeCount, totalPriceCount} from '../../services/payment';

function* changeInCount(action) {
  const {increaseBy, itemCount, totalPrice} = action.payload;
  try {
    const data = yield call(changeCount, increaseBy, itemCount, totalPrice);
    yield put({type: types.CHANGE_IN_COUNT_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.CHANGE_IN_COUNT_FAILURE, payload: err});
    console.log(err);
  }
}

function* countTotalPrice(action) {
  const {itemPrice, totalPrice} = action.payload;
  try {
    const data = yield call(totalPriceCount, itemPrice, totalPrice);
    yield put({type: types.COUNT_TOTALPRICE_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.COUNT_TOTALPRICE_FAILURE, payload: err});
    console.log(err);
  }
}

export default function* MainSaga() {
  yield takeEvery(types.CHANGE_IN_COUNT, changeInCount);
  yield takeEvery(types.COUNT_TOTALPRICE, countTotalPrice);
}
