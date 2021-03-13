import { createRequestActionTypes } from '../../../common/util/lib/createRequestActionTypes';

export const INITIALIZE = 'review/INITIALIZE'; // 모든 내용 초기화
export const CHANGE_FIELD = 'review/CHANGE_FIELD'; // 특정 key 값 바꾸기
export const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes(
    'review/WRITE_POST'
); // 포스트 작성
