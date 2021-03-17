import { handleActions } from 'redux-actions';
import {
    INITIALIZE,
    CHANGE_FIELD,
    WRITE_POST,
    WRITE_POST_FAILURE,
    WRITE_POST_SUCCESS,
    SET_ORIGINAL_POST,
} from '../action/review/ReviewActionType';

const initialState = {
    title: '',
    body: '',
    tags: [],
    post: null,
    postError: null,
    originalPostId: null,
};

const review = handleActions(
    {
        [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [WRITE_POST]: (state) => ({
            ...state,
            // post와 postError를 초기화
            post: null,
            postError: null,
        }),
        // 포스트 작성 성공
        [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        // 포스트 작성 실패
        [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
        //수정버튼클릭시 글쓰기페이지로 이동하기
        [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
            ...state,
            title: post.title,
            body: post.body,
            tags: post.tags,
            originalPostId: post._id,
        }),
    },
    initialState
);
export default review;
