import React, { useEffect } from 'react';
import axios from 'axios';
import useProductStore from '../../store';
import ShowProducts from './ShowProducts';

const ProductContainer = () => {
    const { data, setData } = useProductStore();

    const apiUrl = 'https://fakestoreapi.com/products';

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data); // Ensure response.data is an array
                console.log('Fake Store Products:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [apiUrl]); // Remove `data` from the dependency array


    return (
        <>
            <h1>Our New Products</h1>
            <ShowProducts />
        </>
    );
};

export default ProductContainer;
