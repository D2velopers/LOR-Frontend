import React from 'react';
import styled from 'styled-components';
import Comment from '../atoms/Comment';

const Wrapper = styled.div`
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;
const List = styled.div`
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;
const Title = styled.div`
  font-size: 1rem;
`;

export default function CommentsForm({ comments }) {
  return (
    <Wrapper>
      <Title>댓글 {`${comments.length}`}</Title>
      <List>
        {comments.map((comment, index) => (
          <Comment key={`comment_${index}`} />
        ))}
      </List>
    </Wrapper>
  );
}
