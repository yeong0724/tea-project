import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../util/lib/styles/palette';
//임포트완료 3.13
const SubInfoBlock = styled.div`
    ${(props) =>
        props.hasMarginTop &&
        css`
            margin-top: 1rem;
        `}
    color: ${palette.gray[6]};

    /* span 사이에 가운뎃점 문자 보여주기*/
    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7'; /* 가운뎃점 문자 */
    }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
                <Link to={`/@${username}`}>{username}</Link>
            </span>
            <span>{publishedDate && new Date(publishedDate).toLocaleDateString()}</span>
            {/* publishedDate가 null이면 && 에 의해  newDate안뜸  */}
        </SubInfoBlock>
    );
};

export default SubInfo;
