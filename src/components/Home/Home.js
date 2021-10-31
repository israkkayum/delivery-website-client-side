import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Process from '../Process/Process';
import Restaurants from '../Restaurants/Restaurants';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
          <div>
              <Banner></Banner>
              <Categories></Categories>
              <Restaurants></Restaurants>
              <Process></Process>
              <Teams></Teams>
          </div>
    );
};

export default Home;