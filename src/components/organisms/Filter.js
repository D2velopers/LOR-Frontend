import React, { useState } from 'react';
import styled from 'styled-components';
import { AddOrCancel } from '../../icons/generals';
import { useIntl } from 'react-intl';

const Centered = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  background-color: ${props => props.theme.colors.dark.bg};
  &:after {
    content: '';
    position: absolute;
    z-index: 10;
    top: 99%;
    left: calc(50% - 20px);
    background-color: ${props => props.theme.colors.dark.bg};
    width: 40px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  color: ${props => props.theme.colors.dark.title};
  padding: 1rem;
  svg {
    fill: ${props => props.theme.colors.dark.title};
  }
`;
const Fieldset = styled.fieldset`
  position: relative;
  z-index: 100;
  border: ${props =>
    props.activated ? `2px solid ${props.theme.colors.dark.emph}` : 'none'};
  border-radius: ${props => props.theme.styles.borderRadius};
  padding: ${props => (props.activated ? '1rem' : '0 1rem')};
  legend {
    display: flex;
    align-items: center;
    justify-content: space-around;
    fill: ${props => props.theme.colors.dark.title};
    font-size: 1.2rem;
    padding-right: 0.5rem;
    cursor: pointer;
  }
  > div {
    opacity: ${props => (props.activated ? 1 : 0)};
    max-height: ${props => (props.activated ? '1000px' : 0)};
    transform-origin: top;
    transition: max-height 0.6s cubic-bezier(0, 1, 0, 1),
      opacity 0.3s cubic-bezier(0, 1, 0, 1);
    max-width: ${props => props.theme.sizes.middle};
    margin: 0 auto;
    > *:not(:last-child) {
      margin-bottom: ${props => props.theme.sizes.space};
    }
  }
`;
const Title = styled.div`
  color: ${props => props.theme.colors.dark.emph};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export default function Filter({ pageLocale, children }) {
  const [activated, setActivated] = useState(true);
  const { formatMessage: f } = useIntl();
  return (
    <Centered>
      <Wrapper>
        {pageLocale && <Title>{f({ id: pageLocale })}</Title>}
        <Fieldset activated={activated}>
          <legend
            onClick={() => {
              setActivated(!activated);
            }}>
            <AddOrCancel cancel={activated} />
            {f({ id: 'app.filters' })}
          </legend>
          <div>{children}</div>
        </Fieldset>
      </Wrapper>
    </Centered>
  );
}
