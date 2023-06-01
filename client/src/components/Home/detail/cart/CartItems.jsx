import { Typography, Button } from "@mui/material";
import {useDispatch} from 'react-redux';
import { removeToCart } from "../../../../redux/actions/cartAction";
import { Box, styled } from "@mui/system";
import { addEllipses } from "../../../../utils/commonUtils";
import ButtonGroups from "./ButtonGroups";
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;  
  background: #fff;
`;
const LeftComponent = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;

`;

const Remove=styled(Button)`
margin-top: 20px;
fonrt-size: 16px;
color: '#000';
font-weight: 600;
`
const CartItems = ({ item }) => {
  const dispatch=useDispatch();
  const removeItemFromCart=(id)=>{
    dispatch(removeToCart(id));
        }
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt=" product" style={{height: 110, width: 110}}/>
        <ButtonGroups/>
      </LeftComponent>
      <Box style={{marginTop: 12}}>
        <Typography>{addEllipses(item.title.longTitle)}</Typography>
        <Typography style={{ color: "#878787", fontSize: 14, marginTop: 10 }}>
          Seller: RetailNet
        </Typography>
        <Box component="span">
          <img
            src={fassured}
            alt="Notfound"
            style={{ width: 50, marginLeft: 10 }}
          ></img>
        </Box>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "878787", Opacity: 0.1 }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "388E3C" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};
export default CartItems;
