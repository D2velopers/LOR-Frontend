import React from 'react';
import { withRouter } from 'react-router-dom';
import { useInput } from '../../lib';
import Header from '../../components/organisms/Header';

export default withRouter(({ history }) => {
  const search = useInput('');
  const handleSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const handleLogin = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <Header
      search={search}
      onSearchSubmit={handleSearchSubmit}
      onLogin={handleLogin}
    />
  );
});
