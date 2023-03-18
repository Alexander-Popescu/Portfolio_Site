import Link from "next/link";
import { Modal, Button, Text, Input, Card } from "@nextui-org/react";
import React from "react";
import { createTheme } from "@nextui-org/react"

export default function Header() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="" className="flex space-x-2">
        <Text
        h1
        size={25}
        css={{
          textGradient: "120deg, $purple600 -100%, $blue600 20%, $link 50%, $blue600 80%, $purple600 200%",
        }}
        weight="bold"
        >
          Alexander Popescu
        </Text>
      </Link>
        <Button auto bordered color="gradient" shadow onPress={handler}>
          Contact Me
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Links
            </Text>
          </Modal.Header>
          <Modal.Body>
          <Card css={{ mw: "100vw" }}>
      <Card.Body>
        <Text size={18}><b>Email:</b></Text>
        <Text size={14}>AlexanderPopescu5381@gmail.com</Text>
      </Card.Body>
    </Card>
    <Card css={{ mw: "100vw" }}>
      <Card.Body>
        <Text size={18}><b>Github:</b></Text>
        <Text size={14}>Alexander-Popescu</Text>
      </Card.Body>
    </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </header>
  );
}
