import { handleActions } from 'redux-actions';
import { LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE } from '../action/posts/PostsActionType';

const initialState = {
    posts: null,
    error: null,
    lastPage: 1,
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
            ...state,
            posts,
            lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
        }),
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default posts;
