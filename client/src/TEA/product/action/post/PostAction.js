import { createAction } from 'redux-actions';
import { READ_POST, UNLOAD_POST } from './PostActionType';

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);
