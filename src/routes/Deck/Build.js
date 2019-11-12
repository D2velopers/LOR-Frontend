import React, { useState } from 'react';
import { useChange } from '../../lib';
import data from '../../data/card/data/set1-ko_kr.json';
import Layout from '../../layouts/ListLayout';
import CardFrame from '../../components/atoms/CardFrame';
import { ResponsiveGridList } from '../../components/atoms/FilterList';
import SortingSwitch from '../../components/molecules/SortingSwitch';
import RegionFilter from '../../components/molecules/RegionFilter';
import CostFilter from '../../components/molecules/CostFilter';
import CardTypeFilter from '../../components/molecules/CardTypeFilter';
import RarityFilter from '../../components/molecules/RarityFilter';
import DeckBuilder from '../../components/organisms/DeckBuilder';
import Card from '../../components/molecules/Card';

export default function List() {
  const [deck, setDeck] = useState([]);
  const [numberOfChamp, setNumberOfChamp] = useState(0);
  const [numberOfCard, setNumberOfCard] = useState(0);
  const [builderActivated, setBuilderActivated] = useState(false);

  function toggleBuilder() {
    setBuilderActivated(!builderActivated);
  }
  function addCard(card) {
    // 40장 이내
    // 동일 카드는 3장까지
    // 챔피언은 최대 6종류만
    // 진영 최대 2종류
    // 메타데이터 관련 필터는 onClick 해제

    const targetCode = card.cardCode;
    const nextDeck = Array.from(deck);
    console.log(card);
    if (numberOfCard < 40) {
      const existedIdx = deck.findIndex(item => item[0] === targetCode);
      if (existedIdx < 0) {
        nextDeck.push({ '0': targetCode, '1': 1 });
        setDeck(nextDeck);
        setNumberOfCard(numberOfCard + 1);
      } else if (deck[existedIdx][1] < 3) {
        nextDeck[existedIdx][1]++;
        setDeck(nextDeck);
        setNumberOfCard(numberOfCard + 1);
      }
    }
  }

  return (
    <>
      <Layout
        pageLocale={'page.build'}
        FilterSet={FilterSet}
        optFunc={toggleBuilder}
        optActivated={builderActivated}>
        {data.map((item, index) => (
          <Card key={item.cardCode} value={item} onClick={addCard} />
        ))}
      </Layout>
      <DeckBuilder activated={builderActivated} />
    </>
  );
}

function FilterSet() {
  const region = useChange([], 2);
  const cost = useChange([]);
  const type = useChange([]);
  const rarity = useChange([]);

  return (
    <>
      <RegionFilter {...region} />
      <CostFilter {...cost} />
      <ResponsiveGridList>
        <CardTypeFilter {...rarity} />
        <RarityFilter {...type} />
      </ResponsiveGridList>
      <SortingSwitch />
    </>
  );
}
