import {
  Text,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useShopingCart } from "../providers/ShopingCartContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const OrderModal = ({ onClose, isOpen }: Props) => {
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!!arrShopingCart.length &&
            arrShopingCart.map((p: any) => (
              <Flex justifyContent="space-between" key={p.id}>
                <Text fontWeight="bold">{p.title}</Text>
                <Text>{`${p.total} x ${p.price}`}</Text>
              </Flex>
            ))}
        </ModalBody>

        <ModalFooter
          borderTopWidth="1px"
          mt="10px"
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
            <Button mr={3} onClick={onClose} size="sm">
              Close
            </Button>
            <Button bg="green.200" size="sm">
              Accept
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
