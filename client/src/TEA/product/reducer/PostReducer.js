import { handleActions } from 'redux-actions';
import { READ_POST_SUCCESS, READ_POST_FAILURE, UNLOAD_POST } from '../action/post/PostActionType';

const initialState = {
    post: null,
    error: null,
};

const post = handleActions(
    {
        [READ_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [READ_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [UNLOAD_POST]: () => initialState,
    },
    initialState
);

export default post;
