import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags, userId }) =>
    client.post('/api/posts/write', { title, body, tags, userId });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = () => client.post(`/api/posts/list  `);

export const updatePost = ({ id, title, body, tags }) =>
    client.patch(`/api/posts/${id}`, {
        title,
        body,
        tags,
    });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
