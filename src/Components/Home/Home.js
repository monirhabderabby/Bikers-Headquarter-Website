import React from 'react';
import Footer from '../Shared/Footer/Footer';
import StockUpdate from '../StockUpdate/StockUpdate';
import UpcomingBike from '../UpcomingBike/UpcomingBike';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingBike></UpcomingBike>
            <StockUpdate></StockUpdate>
            <Footer></Footer>
        </div>
    );
};

export default Home;