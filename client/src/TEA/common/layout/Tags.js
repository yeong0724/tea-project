import React from 'react';
import styled from 'styled-components';
import palette from '../util/lib/styles/palette';
import { Link } from 'react-router-dom';
//임포트완료 3.13

const TagsBlock = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: ${palette.cyan[7]};
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: ${palette.cyan[6]};
        }
    }
`;

const Tags = ({ tags }) => {
    return (
        <TagsBlock>
            {tags.map((tag) => (
                <Link className="tag" to={`/?tag=${tag}`} key={tag}>
                    #{tag}
                </Link>
            ))}
        </TagsBlock>
    );
};

export default Tags;
