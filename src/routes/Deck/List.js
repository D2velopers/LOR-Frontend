import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChange } from '../../lib';
import Layout from '../../layouts/ListLayout';
import CardFrame from '../../components/atoms/CardFrame';
import { ResponsiveGridList } from '../../components/atoms/FilterList';
import SortingSwitch from '../../components/molecules/SortingSwitch';
import RegionFilter from '../../components/molecules/RegionFilter';
import ChampionFilter from '../../components/molecules/ChampionFilter';
import DeckTypeFilter from '../../components/molecules/DeckTypeFilter';

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
  const region = useChange([], 2);
  const [champions, setChampions] = useState([]);
  const [deckType, setDeckType] = useState([]);

  function handleChampions(champions) {
    if (champions && champions.length > 2) {
      return;
    } else {
      setChampions(champions);
    }
  }
  function FilterSet() {
    return (
      <>
        <RegionFilter {...region} />
        <ResponsiveGridList>
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
        </ResponsiveGridList>
        <SortingSwitch />
      </>
    );
  }

  return (
    <Layout pageLocale={'page.decks'} FilterSet={FilterSet}>
      {CardList.map((item, index) => (
        <Link key={index} to={`decks/${index}`}>
          <CardFrame index={index} />
        </Link>
      ))}
    </Layout>
  );
}
