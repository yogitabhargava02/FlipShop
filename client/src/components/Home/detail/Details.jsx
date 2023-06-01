
import { getProductDetails } from "../../../redux/actions/productActions";

import { useState, useEffect } from 'react';
import ProductDetails from "./ProductDetails";
import { styled, Box, Grid } from '@mui/material';


import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    margin-left:39px;
   
    & > p {
        margin-top: 10px;
    }
`;


const Details = () => {
    
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);

    return (
        <Component>
          {product && Object.keys(product).length && 
       
              <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                  <ActionItem product={product} />
                </Grid>
             
             <RightContainer item lg={7} md={8} sm={8} xs={12}>
<ProductDetails product={product}/>
             </RightContainer>
                 
             
                </Container> 
          }
        </Component>
      );
      
}

export default Details;
