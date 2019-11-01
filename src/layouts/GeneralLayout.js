import React from 'react';
import ContentsFrame from '../components/atoms/ContentsFrame';

export default function GeneralLayout({ small, children }) {
  return <ContentsFrame sm={small}>{children}</ContentsFrame>;
}
