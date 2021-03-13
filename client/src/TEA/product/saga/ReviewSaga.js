import createRequestSaga from '../../common/util/lib/createRequestSaga';
import { WRITE_POST } from '../action/review/ReviewActionType';
import * as postsAPI from '../api/posts';

import { takeLatest } from 'redux-saga/effects';

const reviewmanySaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* reviewSaga() {
    yield takeLatest(WRITE_POST, reviewmanySaga);
}
