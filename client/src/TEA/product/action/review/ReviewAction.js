import { createAction } from 'redux-actions';
import { INITIALIZE, CHANGE_FIELD, WRITE_POST } from './ReviewActionType';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
    title,
    body,
    tags,
}));
