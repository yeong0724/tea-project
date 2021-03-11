import createRequestSaga from '../../common/util/lib/createRequestSaga';
import { LIST_PRODUCT, REGISTER } from '../action/ProductActionType';
import * as productAPI from '../api/product';
import { takeLatest } from 'redux-saga/effects';

const registerSaga = createRequestSaga(REGISTER, productAPI.productRegister);

const productListSaga = createRequestSaga(LIST_PRODUCT, productAPI.productList);

export function* productSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LIST_PRODUCT, productListSaga);
}
