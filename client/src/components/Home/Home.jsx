
import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';


// import getProducts
const Component = styled(Box)`
    padding: 20px 10px;
    background: #FCFBFC;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <Slide products={products} title="Deals of the Day" timer={true}></Slide>
                <Slide products={products} title="Electronics" timer={false}></Slide>
                <Slide products={products} title="Trending" timer={false}></Slide>
            
               
                
            </Component>
        </>
    )
}

export default Home;
