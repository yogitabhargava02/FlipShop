import React from "react";
import LoginDialog from "../Login/LoginDialog";
import { styled, Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext } from "react";
import { LoginContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Login = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Cart = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  background-color: white;
  color: #233958;
  text-transform: none;
  padding: 5px 5px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Login>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Cart style={{ marginTop: 3 }}>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Cart>
      <LoginDialog open={open} setOpen={setOpen} />
    </Login>
  );
};

export default CustomButtons;
