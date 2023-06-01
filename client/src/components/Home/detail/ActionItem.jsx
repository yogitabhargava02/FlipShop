
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { payUsingPaytm } from '../../../services/api';
import{ addToCart} from '../../../redux/actions/cartAction';
import {post} from '../../../utils/paytm';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '28%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
   
    padding: '20px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
    [theme.breakpoints.down('lg')]:{
        width:'40%'
    },
    [theme.breakpoints.down('sm')]:{
width: '48%'
    }
`;


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'yogitabhargava1@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant="contained" onClick={()=>addItemToCart()}><Cart />Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} variant="contained" onClick={()=>buyNow()}><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;
