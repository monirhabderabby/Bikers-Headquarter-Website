import React from 'react';
import Footer from '../Shared/Footer/Footer';
import UpcomingBike from '../UpcomingBike/UpcomingBike';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingBike></UpcomingBike>
            <Footer></Footer>
        </div>
    );
};

export default Home;