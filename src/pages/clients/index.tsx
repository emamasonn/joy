import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Layout from "../../layout";
import Header from "./components/Header";
import ShopingCartDrawer from "./components/ShopingCartDrawer";
import OrderModal from "./components/OrderModal";
import RequestOrderModal from "./components/RequestOrderModal";
import ListMenu from "./components/ListMenu";
import { ShopingCartProvider } from "./providers/ShopingCartContext";
import { ShopingCart } from "./types";

const Clients = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const {
    isOpen: isOpenRequestOrder,
    onOpen: onOpenRequestOrder,
    onClose: onCloseRequestOrder,
  } = useDisclosure();
  const initialValue: { [key: string]: ShopingCart } = {};

  const openOrderModal = () => {
    onClose();
    onOpenModal();
  };

  const openRequestOrder = () => {
    onCloseModal();
    onOpenRequestOrder();
  };

  return (
    <Layout justifyContent="center">
      <ShopingCartProvider initialValue={initialValue}>
        <Box maxWidth="600px" w="100%">
          <ShopingCartDrawer
            isOpen={isOpen}
            onClose={onClose}
            onOpenModal={openOrderModal}
          />
          <OrderModal
            isOpen={isOpenModal}
            onClose={onCloseModal}
            onOpenRequestOrder={openRequestOrder}
          />
          <RequestOrderModal
            isOpen={isOpenRequestOrder}
            onClose={onCloseRequestOrder}
          />
          <Header onOpen={onOpen} />
          <ListMenu />
        </Box>
      </ShopingCartProvider>
    </Layout>
  );
};

export default Clients;
