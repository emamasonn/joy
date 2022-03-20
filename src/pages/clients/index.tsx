import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "../../layout";
import Header from "./components/Header";
import ItemMenu from "./components/ItemMenu";

const Clients = () => {
  return (
    <Layout justifyContent="center">
      <Box maxWidth="600px" w="100%">
        <Header />
        <Flex direction="column">
          <ItemMenu
            title="Titulo de la comida"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
            img="https://bit.ly/dan-abramov"
            price="2.224"
          />
          <ItemMenu
            title="Titulo de la comida"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
            img="https://bit.ly/dan-abramov"
            price="2.224"
          />
          <ItemMenu
            title="Titulo de la comida"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
            img="https://bit.ly/dan-abramov"
            price="2.224"
          />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Clients;
