import React from 'react'
import {  Box, styled, Typography} from "@mui/material";
import {navData} from '../../constants/navData';

const Nav=styled(Box)`
display: flex;
${'' /* align-items: center; */}
margin: 55px 130px 0 130px;
justify-content: space-between;
overflow: hidden;
background-color: '#fff';`

const Container=styled(Box)`
text-align: center;
padding: 12px 8px;
`
const Text=styled(Typography)`
font-size: 14px;
font-family: inherit;
font-weight: 800;

`
const Navbar = () => {
  return (
    <>
    <Nav>
    {navData.map((data) => (
      <Container key={data.id}>
          <img src={data.url} alt="none"/>
          <Text>{data.text}</Text>
        
      </Container>
       
       
      ))}
    </Nav>
      
    </>
  );
};
export default Navbar
