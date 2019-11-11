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

const Device = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-row: 1fr;
  gap: ${props => props.theme.sizes.space};
  @media (max-width: ${props => props.theme.sizes.middle}) {
    grid-template-row: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }
`;

const REGIONS = [
  'Demacia',
  'Freljord',
  'Ionia',
  'Noxus',
  'PiltoverZaun',
  'ShadowIsles',
];
const COSTS = ['0', '1', '2', '3', '4', '5', '6', '7+'];
const TYPES = ['Champion', 'Follower', 'Spell'];
const RARITIES = ['Champion', 'Epic', 'Rare', 'Common'];
const CardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function List() {
  const [regions, setRegions] = useState([]);
  const [costs, setCosts] = useState([]);
  const [types, setTypes] = useState([]);
  const [rarities, setRarities] = useState([]);
  const [sortByRecent, setSortByRecent] = useState(false);
  const [viewByList, setViewByList] = useState(false);

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
  function handleTypes(type) {
    const deduplication = types.filter(el => el !== type);
    if (types.length !== deduplication.length) {
      setTypes(deduplication);
    } else {
      const next = deduplication.concat(type);
      setTypes(next);
    }
  }
  function handleRarities(rarity) {
    const deduplication = rarities.filter(el => el !== rarity);
    if (rarities.length !== deduplication.length) {
      setRarities(deduplication);
    } else {
      const next = deduplication.concat(rarity);
      setRarities(next);
    }
  }
  function handleSort() {
    setSortByRecent(!sortByRecent);
  }
  function handleView() {
    setViewByList(!viewByList);
  }

  function FilterSet() {
    return (
      <>
        <RegionFilter
          regions={REGIONS}
          value={regions}
          onChange={handleRegions}
        />
        <CostFilter costs={COSTS} value={costs} onChange={handleCosts} />
        <Device>
          <CardTypeFilter types={TYPES} value={types} onChange={handleTypes} />
          <RarityFilter
            rarities={RARITIES}
            value={rarities}
            onChange={handleRarities}
          />
        </Device>
        <SortingSwitch
          sortByRecent={sortByRecent}
          viewByList={viewByList}
          handleSort={handleSort}
          handleView={handleView}
        />
      </>
    );
  }

  return (
    <Layout pageLocale={'page.cards'} FilterSet={FilterSet}>
      {CardList.map((item, index) => (
        <Link key={index} to={`cards/${index}`}>
          <CardFrame index={index} />
        </Link>
      ))}
    </Layout>
  );
}
