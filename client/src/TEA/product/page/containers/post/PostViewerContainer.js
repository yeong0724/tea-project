import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../../action/post/PostAction';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../../action/review/ReviewAction';
import { removePost } from '../../../api/posts';

const PostViewerContainer = ({ match, history }) => {
    console.log('match', match);
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { postId } = match.params;
    console.log('포스트아디@@@@@@@@@@@@', postId);
    const dispatch = useDispatch();
    const { post, error, loading, user } = useSelector(({ post, loading, user }) => {
        console.log('useSelector: post');
        console.log(post);
        console.log(post.post);

        console.log('useSelector: user유저유저', user);
        return {
            post: post.post,
            error: post.error,
            loading: loading['post/READ_POST'],
            user: user.user,
        };
    });
    console.log('유저!!!!!!!!!!!!', user);
    console.log('뽀스트!!!!!!!!!!!!!', loading);

    useEffect(() => {
        dispatch(readPost(postId));
        console.log('아디는읽엇냐??', postId);
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    const onEdit = () => {
        console.log('셋오리지날', post);
        dispatch(setOriginalPost(post.post));
        history.push('/review/reviewmany');
    };

    const ownPost = (user && user._id) === (post && post.post.userId && post.post.userId._id); //어우겨우고쳣자나ㅎㅎ
    console.log('여기찍혓냐??유저야', user);
    console.log('여기찍혓냐??포스트야', post);
    console.log('여기찍혓냐??포스트아디야', ownPost);
    console.log(user && user._id);
    console.log('진영이', post && post.post.userId && post.post.userId._id);

    const onRemove = async () => {
        try {
            await removePost(postId);
            history.push('/review/postlistpage');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <PostViewer
            post={post}
            loading={loading}
            error={error}
            actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
        />
    );
};

export default withRouter(PostViewerContainer);
