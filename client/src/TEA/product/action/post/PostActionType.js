import { createRequestActionTypes } from '../../../common/util/lib/createRequestActionTypes';

export const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes(
    'post/READ_POST'
);
export const UNLOAD_POST = 'post/UNLOAD_POST'; // 포스트 페이지에서 벗어날 때 데이터 비우기
