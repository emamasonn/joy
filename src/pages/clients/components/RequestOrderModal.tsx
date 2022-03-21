import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Img,
} from "@chakra-ui/react";
import React from "react";
//@ts-ignore
import iconCheckSolid from "../../../svg/circle-check-solid.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RequestOrderModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m="20px">
        <ModalHeader>The order was successfully taken</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex m="40px" justifyContent="center">
            <Img w={100} src={iconCheckSolid} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RequestOrderModal;
