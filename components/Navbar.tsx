"use client";

import { RiPencilFill, RiSpeakLine } from "@remixicon/react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import NewPost from "./NewPost";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Logo large={false} size={25} />
      </Link>
      <ul className={styles.links}>
        <Link href={"/about"}>
          <li className={styles.link}>About</li>
        </Link>
        <Link href={"/contact-us"}>
          <li className={styles.link}>Contact Us</li>
        </Link>
        <li onClick={onOpen} className={styles.link}>
          Make a Whisper <RiPencilFill />
        </li>
      </ul>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#333"}>
          <ModalHeader>
            <h1 className={styles.modalHeading}>
              Make a whisper <RiSpeakLine />
            </h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewPost />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Navbar;
