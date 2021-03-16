import React from 'react';
import styled from 'styled-components';
import palette from '../../../../common/util/lib/styles/palette';

import Responsive from '../../../../common/layout/Responsive';

import SubInfo from '../../../../common/layout/SubInfo';

import Tags from '../../../../common/layout/Tags';

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
        }
        return <PostViewerBlock>오류 발생!</PostViewerBlock>;
    }
    console.log('폿스트야 여까지왓냐?', post);
    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (loading || !post) {
        return null;
    }

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{post.title}</h1>
                {/* username={user.username}  */}
                <SubInfo publishedDate={post.publishedDate} hasMarginTop />
                {/* <Tags tags={tags} /> */}
            </PostHead>
            <PostContent dangerouslySetInnerHTML={{ __html: post.body }} />
        </PostViewerBlock>
    );
};

export default PostViewer;
