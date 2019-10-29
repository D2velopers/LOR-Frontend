import React, { useState } from 'react';
import styled from 'styled-components';
import SwitchLabel from '../molecules/SwitchLabel';

const Centered = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.dark.bg};
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  color: ${props => props.theme.colors.dark.title};
  padding: 1rem;
`;

export default function ListOptions({ title }) {
  const [sortByRecent, setSortByRecent] = useState(false);
  function handleSort() {
    setSortByRecent(!sortByRecent);
  }
  return (
    <Centered>
      <Wrapper>
        <SwitchLabel
          id={'sortingSwitch'}
          value={sortByRecent}
          onChange={handleSort}
          localeLeft={'sort.popular'}
          localeRight={'sort.recent'}
        />
      </Wrapper>
    </Centered>
  );
}
