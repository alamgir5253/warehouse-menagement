import React from 'react';
import Team from '../TeamSection/Team';
import Banner from './Banner/Banner';
import Card from './CardSection/Card';
import InventoryCars from './InventoryCars/InventoryCars';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryCars></InventoryCars>
      <Card></Card>
      <Team></Team>
    </div>
  );
};

export default Home;