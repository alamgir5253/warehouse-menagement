import React from 'react';
import Team from '../TeamSection/Team';
import Banner from './Banner/Banner';
import Card from './CardSection/Card';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Team></Team>
    </div>
  );
};

export default Home;