import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../../action/post/PostAction';
import PostViewer from '../../components/post/PostViewer';

const PostViewerContainer = ({ match }) => {
    console.log('match', match);
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { postId } = match.params;
    console.log('포스트아디@@@@@@@@@@@@', postId);
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => {
        console.log('useSelector: post');
        console.log(post);
        console.log(post.post);
        return {
            post: post.post,
            error: post.error,
            loading: loading['post/READ_POST'],
        };
    });
    console.log('뽀스트!!!!!!!!!!!!!', loading);
    useEffect(() => {
        dispatch(readPost(postId));
        console.log('아디는읽엇냐??', postId);
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    return <PostViewer post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);
