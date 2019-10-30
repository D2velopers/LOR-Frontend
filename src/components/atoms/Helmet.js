import React from 'react';
import { useIntl } from 'react-intl';
import Helmet from 'react-helmet';

export default function HelmetComponent({ localeId }) {
  const { formatMessage: f } = useIntl();

  return (
    <Helmet>
      <title>{`${f({ id: localeId })}`}</title>
    </Helmet>
  );
}
