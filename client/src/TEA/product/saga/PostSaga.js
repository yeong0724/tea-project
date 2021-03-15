import createRequestSaga from '../../common/util/lib/createRequestSaga';
import { READ_POST } from '../action/post/PostActionType';
import * as postsAPI from '../api/posts';

import { takeLatest } from 'redux-saga/effects';

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}
