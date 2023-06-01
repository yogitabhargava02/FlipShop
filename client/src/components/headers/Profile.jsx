import React from "react";
import { useState } from "react";
import { Typography, Box, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const LogOut=styled(Typography)`
${'' /* justify-content: space-between; */}
${'' /* padding-left: 12px; */}
${'' /* font-size: 14px; */}
`
const Name = styled(Typography)`
  cursor: pointer;


`;
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Logout=()=>{
    setAccount('');
  }
  return (
    <>
      <Box onClick={handleClick}>
        <Name>{account}</Name>
      </Box>
    
        <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>

          <MenuItem onClick={()=>{handleClose(); Logout();}}>
          <PowerSettingsNewIcon fontSize='small' color='primary'/> 
         <LogOut>Log Out</LogOut>  </MenuItem>
        </Menu>
    
    </>
  );
};

export default Profile;
