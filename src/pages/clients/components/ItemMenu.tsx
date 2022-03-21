import { Box, Heading, Image, Text, Flex, Button, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import { Product } from "../types";
//@ts-ignore
import iconArrowDown from "../../../svg/circle-arrow-down-solid.svg";
//@ts-ignore
import iconArrowUp from "../../../svg/circle-arrow-up-solid.svg";
import { useShopingCart } from "../providers/ShopingCartContext";

type Props = {
  total?: number;
};

const ItemMenu = ({
  title,
  description,
  img,
  price,
  id,
  total,
}: Product & Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [shopingCart, setShopingCart] = useShopingCart();

  const addProductToShopingCart = (product: Product): void => {
    const { title, description, img, price, id } = product;
    !!shopingCart[`${id}`]
      ? setShopingCart({
          ...shopingCart,
          [`${id}`]: {
            ...shopingCart[`${id}`],
            total: shopingCart[`${id}`]?.total + 1,
          },
        })
      : setShopingCart({
          ...shopingCart,
          [`${id}`]: {
            title,
            description,
            img,
            price,
            id,
            total: 1,
          },
        });
  };

  const subtractProductToShopingCart = (id: string): void => {
    if (!shopingCart[`${id}`] || !shopingCart[`${id}`]?.total) {
      return;
    }

    if (!(shopingCart[`${id}`]?.total - 1)) {
      const copyShopingCart = { ...shopingCart };
      delete copyShopingCart[`${id}`];
      setShopingCart({ ...copyShopingCart });
    } else {
      setShopingCart({
        ...shopingCart,
        [`${id}`]: {
          ...shopingCart[`${id}`],
          total: shopingCart[`${id}`]?.total - 1,
        },
      });
    }
  };

  return (
    <Flex
      p={3}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      m="3"
      justifyContent="space-between"
      direction="column"
    >
      <Flex justifyContent="space-between">
        <Box mr="10px">
          <Image
            boxSize="70px"
            objectFit="cover"
            src={img}
            alt="food"
            borderRadius="4px"
          />
        </Box>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
          mr="auto"
        >
          <Heading fontSize="md" lineHeight="4">
            {title}
          </Heading>
          <Text fontWeight="bold">{`$${price}`}</Text>
        </Flex>
        <Box>
          <Flex>
            <Button
              colorScheme="pink"
              size="xs"
              onClick={() => subtractProductToShopingCart(id)}
            >
              -
            </Button>
            <Text
              p={0.5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="20px"
              fontSize="medium"
            >
              {!shopingCart[`${id}`]?.total ? 0 : shopingCart[`${id}`]?.total}
            </Text>
            <Button
              colorScheme="pink"
              size="xs"
              onClick={() =>
                addProductToShopingCart({ title, description, img, price, id })
              }
            >
              +
            </Button>
          </Flex>
          <Flex justifyContent="flex-end" alignItems="flex-end" mt="15px">
            <Button size="xs" onClick={() => setIsExpanded(!isExpanded)}>
              {!isExpanded ? (
                <Img w="15px" src={iconArrowUp} alt="icon" />
              ) : (
                <Img w="15px" src={iconArrowDown} alt="icon" />
              )}
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box hidden={isExpanded}>
        <Text fontSize="xs" color="gray.500" pt={2} lineHeight="4">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default ItemMenu;
