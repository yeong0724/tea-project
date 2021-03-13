import client from './client';

export const productRegister = ({ writer, name, description, price, images }) =>
    client.post('/api/product/register', { writer, name, description, price, images });

export const productList = () => client.post('/api/product/list');
