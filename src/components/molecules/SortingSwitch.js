import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { FlexList } from '../atoms/FilterList';
import { SwitchWithLabel } from '../atoms/Switch';
import { GridView, ListView } from '../../icons/generals';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.dark.title};
  margin-bottom: 0.5rem;
`;

export default function RegionFilter({ regions }) {
  const { formatMessage: f } = useIntl();
  const [sortByRecent, setSortByRecent] = useState(false);
  const [viewByList, setViewByList] = useState(false);
  function handleSort() {
    setSortByRecent(!sortByRecent);
  }
  function handleView() {
    setViewByList(!viewByList);
  }
  return (
    <Wrapper>
      <Title>{f({ id: 'option.rest' })}</Title>
      <FlexList>
        <SwitchWithLabel
          id={'sortingSwitch'}
          value={sortByRecent}
          onChange={handleSort}
          LeftLabel={() => f({ id: 'sort.popular' })}
          RightLabel={() => f({ id: 'sort.recent' })}
        />
        <SwitchWithLabel
          id={'viewSwitch'}
          value={viewByList}
          onChange={handleView}
          LeftLabel={() => <GridView />}
          RightLabel={() => <ListView />}
        />
      </FlexList>
    </Wrapper>
  );
}
