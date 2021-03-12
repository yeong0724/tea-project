import React, { useEffect, useState } from 'react';
import { Icon, Col, Card, Row, Button } from 'antd';
import ProductList from '../components/ProductList';
import Title from 'antd/lib/typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductList } from '../../action/ProductAction';

function ProductListContainer() {
    const dispatch = useDispatch();
    const { productList } = useSelector(({ products }) => ({ productList: products.productList }));

    useEffect(() => {
        dispatch(requestProductList());
    }, [dispatch]);

    return (
        <>
            <ProductList productList={productList} />
        </>
    );
}

export default ProductListContainer;
