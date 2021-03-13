import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/review/TagBox';
import { changeField } from '../../../action/review/ReviewAction';

const TagBoxContainer = () => {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.review.tags);

    const onChangeTags = (nextTags) => {
        dispatch(
            changeField({
                key: 'tags',
                value: nextTags,
            })
        );
    };

    return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
