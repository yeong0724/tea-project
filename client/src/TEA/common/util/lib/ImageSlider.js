import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ImgTag = styled.img`
    width: 100%;
    max-height: 150px;
`;

function ImageSlider({ images }) {
    return (
        <div>
            <Carousel autoplay>
                {images.map((image, index) => (
                    <div key={index}>
                        <ImgTag src={`http://localhost:5000/${image}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlider;
