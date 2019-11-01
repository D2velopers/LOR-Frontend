import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.dark.title};
  margin-bottom: 0.5rem;
`;

export default function CardTypeFilter({ types, value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.type' })}</Title>
      <GridList min={2} max={2} size={'3em'}>
        {types.map(type => (
          <div
            key={`card_type_${type}`}
            onClick={() => onChange(type)}
            style={{
              cursor: 'pointer',
              opacity: value.some(item => item === type) ? 1 : 0.3,
            }}>
            {type}
          </div>
        ))}
      </GridList>
    </Wrapper>
  );
}

// import React from 'react';
// import styled from 'styled-components';
// import { useIntl } from 'react-intl';
// import Selector from '../atoms/Selector';

// const Wrapper = styled.div`
//   width: 100%;
//   margin: 0 auto;
// `;
// const Title = styled.p`
//   text-align: center;
//   font-size: 1.1rem;
//   color: ${props => props.theme.colors.dark.title};
//   margin: 0.5rem;
// `;

// export default function ChampionFilter({ options, isMulti, value, onChange }) {
//   const { formatMessage: f } = useIntl();

//   return (
//     <Wrapper>
//       <Title>{f({ id: 'option.type' })}</Title>
//       <Selector options={options} value={value} onChange={onChange} />
//     </Wrapper>
//   );
// }
