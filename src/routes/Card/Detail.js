import React from 'react';
import styled from 'styled-components';
import Layout from '../../layouts/DetailLayout';
import CardDetail from '../../components/organisms/CardDetail';
import data from '../../data/card/data/set1-ko_kr.json';
import img from '../../data/card/img/cards/01IO012T2.png';

const comments = [1, 2, 3, 4, 5, 6];
export default function Detail({
  match: {
    params: { cardId },
  },
}) {
  return (
    <Layout comments={comments}>
      <CardDetail value={data[1]} />
    </Layout>
  );
}
