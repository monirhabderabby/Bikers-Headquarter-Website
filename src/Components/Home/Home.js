import React from 'react';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import StockUpdate from '../StockUpdate/StockUpdate';
import UpcomingBike from '../UpcomingBike/UpcomingBike';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingBike></UpcomingBike>
            <Products></Products>
            <StockUpdate></StockUpdate>
            <Footer></Footer>
        </div>
    );
};

export default Home;