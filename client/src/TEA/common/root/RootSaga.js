import { all } from 'redux-saga/effects';
import { productSaga } from '../../product/saga/ProductSaga';
import { reviewSaga } from '../../product/saga/ReviewSaga';
import { postSaga } from '../../product/saga/PostSaga';
import { postsSaga } from '../../product/saga/PostsSaga';

export default function* rootSaga() {
    yield all([productSaga(), reviewSaga(), postSaga(), postsSaga()]);
}
