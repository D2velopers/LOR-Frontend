import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Label = styled.span`
  margin-left: 0.5em;
`;

export default function IconLabel({ set, label, localeId }) {
  const { formatMessage: f } = useIntl();

  function Icon() {
    return set[label]();
  }

  return (
    <Wrapper>
      <Icon />
      <Label>{f({ id: localeId })}</Label>
    </Wrapper>
  );
}
