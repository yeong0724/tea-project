import React from 'react';
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../../common/util/lib/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const AddProduct = ({ product, onChange, updateImages, submitHandler }) => {
    return (
        <div
            style={{
                maxWidth: '700px',
                margin: '2rem auto',
                border: '1px solid #e5e5e5',
                padding: '2rem 2rem',
                boxShadow: '0 0 15px #bdbdbd',
                borderRadius: '8px',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} style={{ letterSpacing: '0.1rem' }}>
                    Tea Product Upload
                </Title>
            </div>
            <Form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <label>상품명</label>
                <Input
                    placeholder="상품명을 입력해주세요"
                    onChange={onChange}
                    name="name"
                    value={product.name}
                />
                <br />
                <br />
                <label>설명</label>
                <TextArea
                    placeholder="상품설명을 입력해주세요"
                    onChange={onChange}
                    name="description"
                    value={product.description}
                />
                <br />
                <br />
                <label>가격($)</label>
                <Input
                    type="number"
                    placeholder="상품가격을 입력해주세요"
                    onChange={onChange}
                    name="price"
                    value={product.price}
                />
                <br />
                <br />
                <Button onClick={submitHandler}> 확인</Button>
            </Form>
        </div>
    );
};

export default AddProduct;
