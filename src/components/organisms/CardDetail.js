import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import CardFrame from '../atoms/CardFrame';

const Title = styled.div`
  font-size: 1.5rem;
`;
const ToBack = styled(Link)`
  color: ${props => props.theme.colors.dark.emph};
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
const Description = styled.div``;
const Bio = styled.p`
  font-style: italic;
`;

export default function CardDetail() {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <ToBack to="/cards">{f({ id: 'nav.cards' })}</ToBack>
      <Title>Card 0 1</Title>
      <Wrapper>
        <CardFrame />
        <Detail>
          <Feature>Shadow Isles Spell Rare</Feature>
          <Description>
            BurstBurst spells resolve instantly. The enemy can't act before it
            finishes. Pick a follower. Create an Ephemeral copy of it in hand.
          </Description>
          <Bio>
            For a moment, she remembered. Dappled sunlight dancing across her
            skin, plump dewberries bursting between her teeth, and the glade’s
            fragile melody drifting over her on the breeze. Then... it was gone.
          </Bio>
        </Detail>
      </Wrapper>
    </>
  );
}
