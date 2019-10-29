import React from 'react';
import styled from 'styled-components';
import GeneralLayout from './GeneralLayout';
import Filter from '../components/organisms/Filter';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${props => props.theme.sizes.card.width}
  );
  justify-content: center;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export default function ListLayout({ FilterSet, children }) {
  return (
    <>
      <Filter>
        <FilterSet />
      </Filter>
      <GeneralLayout>
        <List>{children}</List>
      </GeneralLayout>
    </>
  );
}
