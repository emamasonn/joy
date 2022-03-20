import React from "react";
import { Box } from "@chakra-ui/react";
// @ts-ignore
import iconShopingCard from "../../../svg/cart-shopping-solid.svg";

const Header = () => {
  return (
    <Box
      p="3"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>Ema Mason</Box>
      <Box w={30} h={30}>
        <img src={iconShopingCard} alt="icon" />
      </Box>
    </Box>
  );
};

export default Header;
