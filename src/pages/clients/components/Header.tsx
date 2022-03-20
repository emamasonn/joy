import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
// @ts-ignore
import iconShopingCart from "../../../svg/cart-shopping-solid.svg";

type Props = {
  onOpen: () => void;
};

const Header = ({ onOpen }: Props) => {
  return (
    <Box
      p="3"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Text fontWeight="bold">Ema Mason</Text>
      </Box>
      <Box onClick={onOpen}>
        <Img w={30} h={30} src={iconShopingCart} alt="icon" />
      </Box>
    </Box>
  );
};

export default Header;
