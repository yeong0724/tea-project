import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavDropdown, Nav, Button, Jumbotron } from 'react-bootstrap';
import 관아 from './image/관아.png';
import 밭 from './image/밭.jpg';
import 다도 from './image/다도.jpg';
import 잼 from './image/잼.png';
import 차실 from './image/차실.png';
import 다도1 from './image/다도1.jpg';

import ProductListContainer from '../../../product/page/containers/ProductListContainer';

function LandingPage() {
    const dispatch = useDispatch();
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={밭}
                        alt="First slide"
                        style={{ height: 550, padding: '0 150px' }}
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: 'beige', fontFamily: '문체부 쓰기 정체' }}>봄맞이</h1>
                        <h1 style={{ color: 'white', fontFamily: '바탕체' }}>햇 차 나왔습니다</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={다도}
                        alt="Second slide"
                        style={{ height: 550, padding: '0 150px' }}
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: 'white', fontFamily: 'Gabriola' }}>
                            Woul you like tea?
                        </h1>
                        <h3 style={{ color: 'white', fontFamily: 'Bradley Hand ITC' }}>
                            welcome😊
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={관아}
                        alt="Third slide"
                        style={{ height: 550, padding: '0 250px' }}
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: 'green', fontFamily: 'Gabriola' }}>Yes, I like tea!</h1>
                        <h4 style={{ color: 'white', fontFamily: 'Bradley Hand ITC' }}>
                            Thank you for come to here!💕
                        </h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={다도1}
                        alt="First slide"
                        style={{ height: 550, padding: '0 250px' }}
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: 'beige', fontFamily: '문체부 쓰기 정체' }}>
                            차 한 잔의{' '}
                        </h1>
                        <h1 style={{ color: 'white', fontFamily: '문체부 쓰기 정체' }}>여유, 쉼</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={잼}
                        alt="Fourth slide"
                        style={{ height: 550, padding: '0 150px' }}
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: 'pink', fontFamily: 'fantasy', fontSize: 110 }}>
                            <span style={{ color: 'red' }}>New</span> Item{' '}
                            <span style={{ color: 'yellow' }}>Jam</span>, launch!!
                        </h1>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={차실}
                        alt="Fifth slide"
                        style={{ height: 550, padding: '0 150px' }}
                    />
                    <Carousel.Caption>
                        <h1
                            style={{
                                color: 'beige',
                                fontFamily: '문체부 쓰기 흘림체',
                            }}
                        >
                            <span style={{ color: 'white' }}>관아의</span>
                            <br /> 향기를
                            <br /> 맛 보고 가세요.
                            <br />
                            <br />
                            <br />
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <ProductListContainer />
        </>
    );
}

export default LandingPage;
