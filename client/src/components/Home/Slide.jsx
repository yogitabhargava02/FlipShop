import React from 'react';
import { Box, Typography, Button, Divider} from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1
  },
};

const StyledComponent = styled(Box)`
  margin-top: 2px;
  ${'' /* background-color: grey; */}


`;

const StyledDeals = styled(Typography)`
  margin-top: 1%;
  padding: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2px;
`;

const renderer=({hours,minutes,seconds})=>{
  return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
}


const Viewall =styled(Button)`
border-radius: 3;
margin-top: 2%;

background-color:'green';
`;
const Product=styled(Box)`
margin-top: 20px;


border-color: black;
`
const Image = styled('img')({
  width: 'auto',
  height: 150
});

const Main=styled(Box)`
display: flex;
margin-top: 18px;

`

const Slide = ({ products, title, timer }) => {
  return (
    <StyledComponent>
   <Main>
   <StyledDeals>{title}</StyledDeals>
     
     {
       timer && 
      
      <Main>
      <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt="no image found" height={22} width={22} ></img>
 
   <Countdown date={Date.now()+ 5.04e+7} renderer={renderer} />

   </Main>
     }
     
     
     
<Viewall style={{marginTop: '2px', marginLeft: 'auto', backgroundColor: 'yellow'}}> View ALL</Viewall>
   </Main>
   
 
   <Divider style={{margin: 10}}/> 
    
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        slidesToSlide={1}
        customTransition="all .5"
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map(product => (
          <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
          <Product textAlign="center" style={{padding: '25px 15px'}}>
          
          <Image src={product.url} alt="product" />  
          <Typography style={{fontWeight: 600}}>{product.title.shortTitle}</Typography>
          <Typography style={{color: "green"}}>{product.discount}</Typography>

          <Typography style={{opacity: .5}}>{product.tagline}</Typography>

        </Product>
          </Link>
         
         
        ))}
      </Carousel>
    </StyledComponent>
  );
};

export default Slide;
