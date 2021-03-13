import { all } from 'redux-saga/effects';
import { productSaga } from '../../product/saga/ProductSaga';
import { reviewSaga } from '../../product/saga/ReviewSaga';

export default function* rootSaga() {
    yield all([productSaga(), reviewSaga()]);
}
