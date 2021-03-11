import { all } from 'redux-saga/effects';
import { productSaga } from '../../product/saga/ProductSaga';

export default function* rootSaga() {
    yield all([productSaga()]);
}
