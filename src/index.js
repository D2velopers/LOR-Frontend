import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import locale from './locale';
import App from './App';

const defaultLang = 'ko';

ReactDOM.render(
  <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
