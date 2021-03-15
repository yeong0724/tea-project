import createRequestSaga from '../../common/util/lib/createRequestSaga';
import { LIST_POSTS } from '../action/posts/PostsActionType';
import * as postsAPI from '../api/posts';

import { takeLatest } from 'redux-saga/effects';

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}
