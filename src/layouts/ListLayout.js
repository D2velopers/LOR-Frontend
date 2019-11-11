import React from 'react';
import styled from 'styled-components';
import GeneralLayout from './GeneralLayout';
import Filter from '../components/organisms/Filter';
import { DefaultInput } from '../components/atoms/Input';
import { IconButton } from '../components/atoms/Button';
import { Caret, Inbox } from '../icons/generals';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${props => props.theme.sizes.card.width}
  );
  justify-content: center;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding-bottom: ${props => props.theme.sizes.headerHeight};
`;
const Options = styled.div`
  width: 100%;
  z-index: 900;
  position: fixed;
  bottom: 0;
  height: ${props => props.theme.sizes.headerHeight};
  background-color: ${props => props.theme.colors.dark.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.sizes.space};
  }
`;
const MainOption = styled.div`
  max-width: ${props => props.theme.sizes.small};
  flex: 1;
`;

export default function ListLayout({
  pageLocale,
  FilterSet,
  optFunc,
  optActivated,
  children,
}) {
  function scrollTop() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
  return (
    <>
      <Filter pageLocale={pageLocale}>
        <FilterSet />
      </Filter>
      <GeneralLayout>
        <List>{children}</List>
      </GeneralLayout>
      <Options>
        <IconButton onClick={scrollTop}>
          <Caret />
        </IconButton>
        <MainOption>
          <DefaultInput placeholderLocaleId="list.search" />
        </MainOption>
        <IconButton onClick={optFunc} activated={optActivated}>
          <Inbox />
        </IconButton>
      </Options>
    </>
  );
}
