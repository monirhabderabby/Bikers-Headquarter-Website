import React from 'react';
import './UpcomingBike.css'
import bike from '../Assets/r15 v4.png'

const UpcomingBike = () => {
    return (
        <div className='mt-3'>
            <div className='upcoming-bike w-75 mx-auto'>
            <h1 className='mt-5'>Upcoming Bikes</h1>
            <h3 className='mt-3'>Yamaha R15 v4</h3>
            <p>Yamaha planning to launch some exciting products in the upcoming year and their wild card will be Yamaha R15 v4. Although there has been no massive change in the new R15 v4, but it’s design more sharp. now it’s look like Yamaha R6. however some advanced feature added in this new version. BIkers Headquarter LTD will officially launched this bike in Bangladeshi market probably in January or February.</p>
            <img className='img-fluid' src={bike} alt="Img"/>
            <figcaption>Yamaha R15 v4 Official Photo</figcaption>
        </div>
        </div>
    );
};

export default UpcomingBike;