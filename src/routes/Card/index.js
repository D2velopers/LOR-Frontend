import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './Detail';
import List from './List';

export default function CardRouter() {
  return (
    <Switch>
      <Route path={`/cards/:cardId`} component={Detail} />
      <Route component={List} />
    </Switch>
  );
}
