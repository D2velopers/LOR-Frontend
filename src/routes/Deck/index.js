import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './Detail';
import List from './List';

export default function DeckRouter({ location }) {
  const path = location.pathname.split('/')[1];

  return (
    <Switch>
      <Route path={`/${path}/:deckId`} component={Detail} />
      <Route component={List} />
    </Switch>
  );
}
