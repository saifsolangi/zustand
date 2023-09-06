import React from 'react';
import InputHandler from './components/weather/InputHandler';
import WeatherContainer from './components/weather/WeatherContainer';
import ProductContainer from './components/products/ProductContainer';

const Home = () => {
    return (
        <>
            <WeatherContainer />
            <InputHandler />
            <ProductContainer />
        </>
    );
};

export default Home;
