import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
  background: #233958;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    margin-left: 5%;
  }
`;

const LogoImage = styled('img')(({ theme }) => ({
  width: 70,
  height: 50,
  marginRight: '10px',
  transition: 'height 0.3s',

  [theme.breakpoints.down('sm')]: {
    height: 30,
  },

  [theme.breakpoints.down('xs')]: {
    height: 20,
  },
}));





const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Header = () => {
  

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader position="fixed">
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <LogoImage src={require('../images/final.png')} alt="Logo" />

         
           
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
