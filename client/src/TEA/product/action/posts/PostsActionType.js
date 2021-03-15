import { createRequestActionTypes } from '../../../common/util/lib/createRequestActionTypes';

export const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes(
    'posts/LIST_POSTS'
);
