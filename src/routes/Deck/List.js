import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/ListLayout';
import CardFrame from '../../components/atoms/CardFrame';
import SortingSwitch from '../../components/molecules/SortingSwitch';
import RegionFilter from '../../components/molecules/RegionFilter';
import ChampionFilter from '../../components/molecules/ChampionFilter';
import DeckTypeFilter from '../../components/molecules/DeckTypeFilter';

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
const colourOptions = [
  { value: 'ocean', label: 'oceanoceanOcean', color: '#00B8D9', isFixed: true },
  {
    value: 'blue',
    label: 'oceanoceanBlue',
    color: '#0052CC',
    isDisabled: true,
  },
  { value: 'purple', label: 'oceanoceanoceanPurple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];
const groupedOptions = [
  {
    label: 'Colours',
    options: colourOptions,
  },
  {
    label: 'Flavours',
    options: flavourOptions,
  },
];
const deckTypeOptions = [
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
const CardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function List() {
  const [champions, setChampions] = useState([]);
  const [deckType, setDeckType] = useState([]);
  const [regions, setRegions] = useState([]);
  function handleChampions(champions) {
    if (champions && champions.length > 2) {
      return;
    } else {
      setChampions(champions);
    }
  }
  function handleRegions(region) {
    const deduplication = regions.filter(el => el !== region);
    console.log(region, deduplication, region);
    if (regions.length !== deduplication.length) {
      setRegions(deduplication);
    } else {
      const next = deduplication.concat(region);
      if (next.length < 3) {
        setRegions(next);
      }
    }
  }
  function FilterSet() {
    return (
      <>
        <RegionFilter
          regions={REGIONS}
          value={regions}
          onChange={handleRegions}
        />
        <Device>
          <ChampionFilter
            options={groupedOptions}
            isMulti
            value={champions}
            onChange={handleChampions}
          />
          <DeckTypeFilter
            options={deckTypeOptions}
            value={deckType}
            onChange={setDeckType}
          />
        </Device>
        <SortingSwitch />
      </>
    );
  }

  return (
    <Layout FilterSet={FilterSet}>
      {CardList.map((item, index) => (
        <Link key={index} to={`decks/${index}`}>
          <CardFrame index={index} />
        </Link>
      ))}
    </Layout>
  );
}
