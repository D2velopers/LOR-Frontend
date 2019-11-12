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
  flex: 1;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.sizes.middle}) {
    grid-template-columns: repeat(
      ${props => props.min},
      minmax(auto, max-content)
    );
  }
  grid-template-columns: repeat(
    ${props => props.max || 'auto-fit'},
    minmax(auto, max-content)
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
const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.rows}, 1fr);
  grid-template-row: none;
  gap: ${props => props.theme.sizes.space};
  @media (max-width: ${props => props.theme.sizes.middle}) {
    grid-template-row: repeat(${props => props.rows}, 1fr);
    grid-template-columns: 1fr;
  }
`;

export function GridList({ children, min, max }) {
  return (
    <Grid min={min} max={max}>
      {children}
    </Grid>
  );
}
export function FlexList({ children }) {
  return <Flex>{children}</Flex>;
}

export function ResponsiveGridList({ children }) {
  return <ResponsiveGrid rows={children.length}>{children}</ResponsiveGrid>;
}
