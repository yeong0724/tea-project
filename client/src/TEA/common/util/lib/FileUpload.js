import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import styled from 'styled-components';

const DropDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DropzoneDiv = styled.div`
    width: 300px;
    height: 240px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover {
        background-color: #fcfcfc;
        border: 2px solid gray;
    }
`;

const ImageFormDiv = styled.div`
    width: 320px;
    height: 240px;
    overflow-y: scroll;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Image = styled.img`
    min-width: 300px;
    width: 300px;
    height: 240px;
`;

function FileUpload({ refreshFunction }) {
    const [Images, setImages] = useState([]);
    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' },
        };
        formData.append('file', files[0]);
        axios.post('/api/product/image', formData, config).then((response) => {
            if (response.data.success) {
                console.log('파일 저장 성공', response.data);
                setImages([...Images, response.data.filePath]);
                refreshFunction([...Images, response.data.filePath]);
            } else {
                alert('파일을 저장하는데 실패했습니다');
            }
        });
    };

    const deleteHandler = (image) => {
        const variable = { path: image };
        console.log('path 확인', variable);
        const currentIndex = Images.indexOf(image);
        const newImages = [...Images];
        newImages.splice(currentIndex, 1);
        axios.post('/api/product/imageDelete', variable).then((response) => {
            if (response.data.success) {
                console.log('이미지 삭제 성공');
            } else {
                alert('이미지 삭제를 실패했습니다');
            }
        });
        setImages(newImages);
        refreshFunction(newImages);
    };

    return (
        <DropDiv>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <DropzoneDiv {...getRootProps()} style={{ cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        <PlusOutlined style={{ fontSize: '3rem' }} />
                    </DropzoneDiv>
                )}
            </Dropzone>
            <ImageFormDiv>
                {Images.map((image, index) => (
                    <div key={index} onClick={() => deleteHandler(image)}>
                        <Image src={`http://localhost:5000/${image}`} />
                    </div>
                ))}
            </ImageFormDiv>
        </DropDiv>
    );
}

export default FileUpload;
