import createRequestSaga from '../../common/util/lib/createRequestSaga';
import { WRITE_POST, UPDATE_POST } from '../action/review/ReviewActionType';
import * as postsAPI from '../api/posts';

import { takeLatest } from 'redux-saga/effects';

const reviewmanySaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* reviewSaga() {
    yield takeLatest(WRITE_POST, reviewmanySaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
