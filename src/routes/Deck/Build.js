import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/ListLayout';
import CardFrame from '../../components/atoms/CardFrame';
import SortingSwitch from '../../components/molecules/SortingSwitch';
import RegionFilter from '../../components/molecules/RegionFilter';
import CostFilter from '../../components/molecules/CostFilter';
import CardTypeFilter from '../../components/molecules/CardTypeFilter';
import RarityFilter from '../../components/molecules/RarityFilter';
import DeckBuilder from '../../components/organisms/DeckBuilder';

const Device = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-row: none;
  gap: ${props => props.theme.sizes.space};
  @media (max-width: ${props => props.theme.sizes.middle}) {
    grid-template-row: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }
`;

const REGIONS = ['DM', 'FR', 'IO', 'NX', 'PZ', 'SI'];
const COSTS = ['0', '1', '2', '3', '4', '5', '6', '7+'];
const TYPES = ['champion', 'follower', 'spell'];
const RARITIES = ['champion', 'epic', 'rare', 'common'];
const CardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function List() {
  const [builderActivated, setBuilderActivated] = useState(false);

  function toggleBuilder() {
    setBuilderActivated(!builderActivated);
  }
  return (
    <>
      <Layout
        pageLocale={'page.build'}
        FilterSet={FilterSet}
        optFunc={toggleBuilder}
        optActivated={builderActivated}>
        {CardList.map((item, index) => (
          <Link key={index} to={`cards/${index}`}>
            <CardFrame index={index} />
          </Link>
        ))}
      </Layout>
      <DeckBuilder activated={builderActivated} />
    </>
  );
}

function FilterSet() {
  const [champions, setChampions] = useState([]);
  const [deckType, setDeckType] = useState([]);
  const [regions, setRegions] = useState([]);
  const [costs, setCosts] = useState([]);

  function handleChampions(champions) {
    if (champions && champions.length > 2) {
      return;
    } else {
      setChampions(champions);
    }
  }
  function handleRegions(region) {
    const deduplication = regions.filter(el => el !== region);
    if (regions.length !== deduplication.length) {
      setRegions(deduplication);
    } else {
      const next = deduplication.concat(region);
      setRegions(next);
    }
  }
  function handleCosts(cost) {
    const deduplication = costs.filter(el => el !== cost);
    if (costs.length !== deduplication.length) {
      setCosts(deduplication);
    } else {
      const next = deduplication.concat(cost);
      setCosts(next);
    }
  }
  return (
    <>
      <RegionFilter
        regions={REGIONS}
        value={regions}
        onChange={handleRegions}
      />
      <CostFilter costs={COSTS} value={costs} onChange={handleCosts} />
      <Device>
        <CardTypeFilter
          types={TYPES}
          value={champions}
          onChange={handleChampions}
        />
        <RarityFilter
          rarities={RARITIES}
          value={deckType}
          onChange={setDeckType}
        />
      </Device>
      <SortingSwitch />
    </>
  );
}
