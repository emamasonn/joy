import React, { useMemo } from "react";
import { Badge, Box, Img, Text } from "@chakra-ui/react";
import { useShopingCart } from "../providers/ShopingCartContext";
// @ts-ignore
import iconShopingCart from "../../../svg/cart-shopping-solid.svg";

type Props = {
  onOpen: () => void;
};

const Header = ({ onOpen }: Props) => {
  const [shopingCart] = useShopingCart();
  const quantity = useMemo(
    () => Object.values(shopingCart).length || 0,
    [shopingCart]
  );
  return (
    <Box
      p="3"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
      pos="fixed"
      w="100%"
      zIndex="100"
      bg="pink"
      left="0"
      top="0"
    >
      <Box>
        <Text fontWeight="bold">Ema Mason</Text>
      </Box>
      <Box onClick={onOpen} pos="relative">
        {!!quantity && (
          <Badge
            ml="1"
            fontSize="0.8em"
            colorScheme="green"
            pos="absolute"
            borderRadius="8px"
            w="20px"
            h="20px"
            d="flex"
            justifyContent="center"
            right="18px"
            alignItems="center"
            bottom="16px"
          >
            <Text fontSize="11px">{quantity}</Text>
          </Badge>
        )}
        <Img w={30} h={30} src={iconShopingCart} alt="icon" />
      </Box>
    </Box>
  );
};

export default Header;
