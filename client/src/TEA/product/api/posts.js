import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags, userId }) =>
    client.post('/api/posts/write', { title, body, tags, userId });

export const readPost = (id) => client.get(`/api/posts/list/${id}`);

export const listPosts = ({ page, username, tag }) => {
    const queryString = qs.stringify({
        page,
        username,
        tag,
    });
    console.log('쿼리스트링222', queryString);
    return client.get(`/api/posts/list?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
    client.patch(`/api/posts/${id}`, {
        title,
        body,
        tags,
    });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
