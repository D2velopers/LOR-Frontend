import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Build from './Build';
import Detail from './Detail';
import List from './List';

export default function DeckRouter() {
  return (
    <Switch>
      <Route path={`/decks/build`} component={Build} />
      <Route path={`/decks/:deckId`} component={Detail} />
      <Route component={List} />
    </Switch>
  );
}
