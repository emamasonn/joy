import { Flex } from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";
import ItemMenu from "./ItemMenu";
import { listMenu } from "../mockup/listMenuMockup";

const ListMenu = () => {
  return (
    <Flex direction="column">
      {!listMenu.length ? (
        <p>No hay productos cargados</p>
      ) : (
        listMenu.map((p: Product) => (
          <ItemMenu
            key={p.id}
            title={p.title}
            description={p.description}
            img={p.img}
            price={p.price}
            id={p.id}
          />
        ))
      )}
    </Flex>
  );
};

export default ListMenu;
