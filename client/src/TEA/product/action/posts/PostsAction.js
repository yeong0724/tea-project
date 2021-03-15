import { createAction } from 'redux-actions';
import { LIST_POSTS } from './PostsActionType';

export const listPosts = createAction(LIST_POSTS);
