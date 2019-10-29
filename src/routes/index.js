import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Main from './Main';
import Deck from './Deck';
import Card from './Card';
import User from './User';
import NotFound from './NotFound';
import Header from './Base/Header';

export default function Router({ location }) {
  console.log(location);
  return (
    <>
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/decks" component={Deck} />
        <Route path="/cards" component={Card} />
        <Route path="/user/:userId" component={User} />
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
