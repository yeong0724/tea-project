import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/review/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../../action/review/ReviewAction';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ review }) => ({
        title: review.title,
        body: review.body,
        tags: review.tags,
        post: review.post,
        postError: review.postError,
    }));

    // 포스트 등록
    const onPublish = () => {
        dispatch(
            writePost({
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
            history.push(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
