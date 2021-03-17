import React from 'react';
import styled from 'styled-components';
import Responsive from '../../../../common/layout/Responsive';
import Button from '../../../../common/layout/Button';
import palette from '../../../../common/util/lib/styles/palette';

import SubInfo from '../../../../common/layout/SubInfo';
import Tags from '../../../../common/layout/Tags';
import { Link } from 'react-router-dom';
import { DropdownButton, Nav, Table } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
//임포트완료3.14

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    /* 맨 위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const PostItem = ({ posts }) => {
    // const { createdAt, userId, tags, title, body } = post;
    return (
        <Table striped bordered hover variant="pink">
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr>
                        <td> </td>
                        <td>
                            <h6>
                                <b>
                                    <Link to={`/review/postpage/@${post.userId.name}/${post._id}`}>
                                        {post.title}
                                    </Link>
                                </b>
                            </h6>
                        </td>
                        <td>
                            <SubInfo username={post.userId.name} />
                        </td>
                        <td>
                            <SubInfo publishedDate={post.createdAt} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    // 에러 발생 시
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
    }

    return (
        <PostListBlock>
            {/* <WritePostButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/review/reviewmany">
                새 글 작성하기
            </Button>
                )}
            </WritePostButtonWrapper> */}
            {/* 로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}

            {!loading && posts && (
                <div>
                    <h1 style={{ color: 'pink', fontFamily: 'Gabriola', fontSize: 60 }}> review</h1>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link-1"
                                style={{
                                    fontSize: 20,
                                    color: 'gray',
                                    fontFamily: '문체부 쓰기 정체',
                                }}
                            >
                                리뷰 많은 순
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                href="/"
                                style={{
                                    fontSize: 20,
                                    color: 'gray',
                                    fontFamily: '문체부 쓰기 정체',
                                }}
                            >
                                평점 높은 순
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <br />
                    <PostItem posts={posts.postlist} />
                    <Button cyan to="/review/reviewmany">
                        새 글 작성하기
                    </Button>
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;
