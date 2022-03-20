import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Layout from "../../layout";
import Header from "./components/Header";
import ShopingCartDrawer from "./components/ShopingCartDrawer";
import ListMenu from "./components/ListMenu";
import { ShopingCartProvider } from "./providers/ShopingCartContext";
import { ShopingCart } from "./types";

const Clients = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValue: { [key: string]: ShopingCart } = {};

  return (
    <Layout justifyContent="center">
      <ShopingCartProvider initialValue={initialValue}>
        <Box maxWidth="600px" w="100%">
          <ShopingCartDrawer isOpen={isOpen} onClose={onClose} />
          <Header onOpen={onOpen} />
          <ListMenu />
        </Box>
      </ShopingCartProvider>
    </Layout>
  );
};

export default Clients;
