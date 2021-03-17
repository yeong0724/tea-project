import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, productRegister } from '../../action/ProductAction';
import AddProduct from '../components/AddProduct';
import { withRouter } from 'react-router-dom';

function AddProductContainer({ history }) {
    const product = useSelector((state) => state.product);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const { value, name } = e.target;
        console.log('onChange name :', name);
        dispatch(
            changeField({
                key: name,
                value,
            })
        );
    };

    const updateImages = (value) => {
        dispatch(changeField({ key: 'images', value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const writer = user.user._id;
        const { name, description, price, images } = product;
        // 유효성 검사
        if ([name, description, price, images].includes('')) {
            alert('정보를 모두 입력해주세요');
            return;
        }
        dispatch(productRegister({ writer, name, description, price, images }));

        if (product.productError == null) {
            history.push('/');
        } else {
            alert('상품 등록을 실패 했습니다.');
        }
    };

    useEffect(() => {
        dispatch(initializeForm('product'));
    }, [dispatch]);

    return (
        <div>
            <AddProduct
                onChange={onChange}
                updateImages={updateImages}
                submitHandler={submitHandler}
                product={product}
            />
        </div>
    );
}

export default withRouter(AddProductContainer);
