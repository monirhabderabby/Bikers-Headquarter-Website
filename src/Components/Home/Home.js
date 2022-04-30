import React from 'react';
import UpcomingBike from '../UpcomingBike/UpcomingBike';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingBike></UpcomingBike>
        </div>
    );
};

export default Home;