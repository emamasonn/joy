import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children, ...props }: Props & any) => {
  return <Flex {...props}>{children}</Flex>;
};

export default Layout;
