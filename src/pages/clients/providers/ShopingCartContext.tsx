import React, {
  ComponentType,
  createContext,
  useContext,
  useState,
} from "react";

import { ShopingCart } from "../types";

const ShopingCartContext = createContext<any>([]);

type Props = {
  children: JSX.Element;
  initialValue: { [key: string]: ShopingCart };
};

const ShopingCartProvider = ({ initialValue, children }: Props) => {
  const [shopingCart, setShopingCart] =
    useState<{ [key: string]: ShopingCart }>(initialValue);

  return (
    <ShopingCartContext.Provider value={[shopingCart, setShopingCart]}>
      {children}
    </ShopingCartContext.Provider>
  );
};

const ShopingCartConsumer = (Component: ComponentType) => {
  return function WrapperComponent(props: any) {
    return (
      <ShopingCartContext.Consumer>
        {(value) => {
          return <Component {...props} {...value} />;
        }}
      </ShopingCartContext.Consumer>
    );
  };
};

const useShopingCart = () => {
  return useContext(ShopingCartContext);
};

export default ShopingCartContext;

export { ShopingCartProvider, ShopingCartConsumer, useShopingCart };
