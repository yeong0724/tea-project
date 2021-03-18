import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/review/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../../action/review/ReviewAction';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError, userData, originalPostId } = useSelector(
        ({ review, user }) => {
            console.log('유저어어', user);
            return {
                title: review.title,
                body: review.body,
                tags: review.tags,
                post: review.post,
                postError: review.postError,
                userData: user.user,
                originalPostId: review.originalPostId,
            };
        }
    );

    console.log('유저데이타', userData);

    // 포스트 등록
    const onPublish = () => {
        console.log('오리지날아디', originalPostId);
        if (originalPostId) {
            dispatch(updatePost({ title, body, tags, id: originalPostId }));
            return;
        }
        const userId = userData._id;
        dispatch(
            writePost({
                userId,
                title,
                body,
                tags,
            })
        );
    };

    // 취소
    const onCancel = () => {
        history.goBack();
    };

    // 성공 혹은 실패시 할 작업
    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            history.push('/review/postlistpage');
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    return (
        <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId} />
    );
};

export default withRouter(WriteActionButtonsContainer);
