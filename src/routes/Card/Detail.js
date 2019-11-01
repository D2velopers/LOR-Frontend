import React from 'react';
import styled from 'styled-components';
import Layout from '../../layouts/DetailLayout';
import CardFrame from '../../components/atoms/CardFrame';
import CardDetail from '../../components/organisms/CardDetail';

const DeckList = styled.div``;
const comments = [1, 2, 3, 4, 5, 6];
export default function Detail({
  match: {
    params: { cardId },
  },
}) {
  return (
    <Layout comments={comments}>
      <CardDetail />
    </Layout>
  );
}
