import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.sizes.space};
  background-color: ${props => props.theme.colors.dark.lighten};
  border-radius: ${props => props.theme.styles.borderRadius};
`;
const Grid = styled(List)`
  display: grid;
  width: 100%;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.sizes.middle}) {
    grid-template-columns: repeat(
      ${props => props.min},
      ${props => props.size}
    );
  }
  grid-template-columns: repeat(
    ${props => props.max || 'auto-fit'},
    ${props => props.size || '1fr'}
  );
  gap: ${props => props.theme.sizes.space};
`;
const Flex = styled(List)`
  display: flex;
  width: 100%;
  justify-content: space-around;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.sizes.space};
  }
`;

export function GridList({ children, min, max, size = '1fr' }) {
  return (
    <Grid min={min} max={max} size={size}>
      {children}
    </Grid>
  );
}
export function FlexList({ children }) {
  return <Flex>{children}</Flex>;
}
