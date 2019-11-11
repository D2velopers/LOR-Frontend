import React from 'react';
import { useInput } from '../../lib';
import HeaderComponent from '../../components/organisms/Header';

export default function Header({ history, location }) {
  const isHidden = /auth/.test(location.pathname);
  const isSignIn = !!localStorage.getItem('token');
  const search = useInput('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  }
  function handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <HeaderComponent
      search={search}
      onSearchSubmit={handleSearchSubmit}
      onLogout={handleLogout}
      isHidden={isHidden}
      isSignIn={isSignIn}
    />
  );
}
