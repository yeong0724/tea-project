import React from 'react';
import { Icon, Col, Row, Button, Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import ImageSlider from '../../../common/util/lib/ImageSlider';
const { Meta } = Card;

function ProductList({ productList }) {
    // const renderCards = () =>
    //     products &&
    console.log(productList);
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            {/* Page Title */}
            <div style={{ textAlign: 'center' }}>
                <Title level={2}>
                    관아수제차 목록 &nbsp;
                    {/* <Icon type="rocket" /> */}
                </Title>
                <br />
                <hr />
            </div>

            {/* Cards */}
            <div>
                <Row gutter={[8, 8]}>
                    {productList &&
                        productList.productList &&
                        productList.productList.map((product, index) => {
                            return (
                                <Col lg={6} md={8} xs={24} key={index}>
                                    <Card
                                        cover={
                                            <a href="#">
                                                <ImageSlider images={product.images} />
                                            </a>
                                        }
                                    >
                                        <Meta
                                            title={product.name}
                                            description={`$${product.price}`}
                                        />
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            </div>
            <br />
            <br />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button>Load More</Button>
            </div>
        </div>
    );
}

export default ProductList;
