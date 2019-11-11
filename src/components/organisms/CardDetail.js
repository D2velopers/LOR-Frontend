import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Card from '../molecules/Card';

const Title = styled.div`
  font-size: 1.5rem;
`;
const ToBack = styled(Link)`
  color: ${props => props.theme.colors.dark.caption};
  font-weight: 600;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Detail = styled.div`
  flex: 1;
  margin-left: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.light.title};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;
const Feature = styled.div``;
const Description = styled.div`
  line-height: 1.2rem;
`;
const Bio = styled.p`
  font-style: italic;
`;

export default function CardDetail({ value }) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <ToBack to="/cards">{f({ id: 'page.cards' })}</ToBack>
      <Title>{value.name}</Title>
      <Wrapper>
        <Card image={value} />
        <Detail>
          <Feature>
            <span>{value.region}</span>
            <span>{value.supertype ? value.supertype : value.type}</span>
            {value.rarityRef !== 'None' && <span>{value.rarity}</span>}
          </Feature>
          <Description
            dangerouslySetInnerHTML={{ __html: value.description }}
          />
          <Bio>{value.flavorText}</Bio>
        </Detail>
      </Wrapper>
    </>
  );
}
