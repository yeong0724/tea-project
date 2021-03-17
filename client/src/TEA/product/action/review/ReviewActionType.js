import { createRequestActionTypes } from '../../../common/util/lib/createRequestActionTypes';

export const INITIALIZE = 'review/INITIALIZE'; // 모든 내용 초기화
export const CHANGE_FIELD = 'review/CHANGE_FIELD'; // 특정 key 값 바꾸기
export const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes(
    'review/WRITE_POST'
); // 포스트 작성

export const SET_ORIGINAL_POST = 'review/SET_ORIGINAL_POST';

export const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes(
    'review/UPDATE_POST'
); // 포스트 수정
