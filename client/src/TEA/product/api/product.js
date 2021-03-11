import axios from 'axios';

export const productRegister = ({ writer, name, description, price, images }) =>
    axios.post('/api/product/register', { writer, name, description, price, images });

export const productList = () => axios.post('/api/product/list');
