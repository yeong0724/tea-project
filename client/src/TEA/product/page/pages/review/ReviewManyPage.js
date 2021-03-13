import React from 'react';
import Responsive from '../../../../common/layout/Responsive';
import EditorContainer from '../../containers/review/EditorContainer';
import TagBoxContainer from '../../containers/review/TagBoxContainer';
import WriteActionButtonsContainer from '../../containers/review/WriteActionButtonsContainer';

const ReviewManyPage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default ReviewManyPage;
