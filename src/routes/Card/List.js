import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChange } from '../../lib';
import Layout from '../../layouts/ListLayout';
import CardFrame from '../../components/atoms/CardFrame';
import { ResponsiveGridList } from '../../components/atoms/FilterList';
import SortingSwitch from '../../components/molecules/SortingSwitch';
import RegionFilter from '../../components/molecules/RegionFilter';
import CostFilter from '../../components/molecules/CostFilter';
import CardTypeFilter from '../../components/molecules/CardTypeFilter';
import RarityFilter from '../../components/molecules/RarityFilter';

const CardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function List() {
  const region = useChange([]);
  const cost = useChange([]);
  const type = useChange([]);
  const rarity = useChange([]);
  const [sortByRecent, setSortByRecent] = useState(false);
  const [viewByList, setViewByList] = useState(false);

  function handleSort() {
    setSortByRecent(!sortByRecent);
  }
  function handleView() {
    setViewByList(!viewByList);
  }

  function FilterSet() {
    return (
      <>
        <RegionFilter {...region} />
        <CostFilter {...cost} />
        <ResponsiveGridList>
          <CardTypeFilter {...type} />
          <RarityFilter {...rarity} />
        </ResponsiveGridList>
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
