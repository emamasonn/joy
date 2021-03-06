import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useShopingCart } from "../providers/ShopingCartContext";
import ItemMenu from "./ItemMenu";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
};

const ShopingCartDrawer = ({ isOpen, onClose, onOpenModal }: Props) => {
  const [shopingCart] = useShopingCart();

  const arrShopingCart = useMemo(
    () => Object.values(shopingCart) || [],
    [shopingCart]
  );

  const calculeTotal = useMemo(() => {
    return arrShopingCart.reduce(
      (acc: number, a: any) => acc + a.price * a.total,
      0
    );
  }, [arrShopingCart]);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>
        <DrawerBody p={0}>
          {!arrShopingCart?.length ? (
            <Flex justifyContent="center" alignItems="center" m="50px">
              <Text textAlign="center" fontWeight="bold">
                There's nothing in the shopping cart yet
              </Text>
            </Flex>
          ) : (
            arrShopingCart.map((p: any) => (
              <ItemMenu
                key={p.id}
                title={p.title}
                description={p.description}
                img={p.img}
                price={p.price}
                id={p.id}
                total={p.total}
              />
            ))
          )}
        </DrawerBody>
        <DrawerFooter
          borderTopWidth="1px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="space-between"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            mb="20px"
          >
            <Text fontSize="xl" fontWeight="bold">
              Total:
            </Text>
            <Text>{`$${calculeTotal}`}</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            w="100%"
          >
            <Button size="sm" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              size="sm"
              bg="green.200"
              onClick={onOpenModal}
              disabled={!arrShopingCart.length}
            >
              Order
            </Button>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShopingCartDrawer;
