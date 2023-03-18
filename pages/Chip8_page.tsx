import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@nextui-org/react";
import Head from "next/head";
import Footer from "../components/Footer";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Alexander Popescu</title>
      </Head>

      <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
        <Link href="/" className="flex space-x-2">
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
        <a href="https://github.com/Alexander-Popescu/Chip8_Interpreter">
          <Button 
                href="#"
                shadow
                color="gradient"
                bordered
                auto
                >
                View project on Github
              </Button>
          </a>
      </header>
      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20">
      <Text className="text-lg" h1 size={50} weight="bold">
            Chip-8 Interpreter
        </Text>
        <h2 className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Chip-8 was an interpreted programming language developed in the 1970s. The language was designed such that any program written for chip-8 will work on any machine that has a functioning chip-8 interpreter. The goal of this project was to create one of these chip-8 interpreters in the C programming language.
        </h2>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Graphical Output
        </Text>
        <h2 className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To produce output from the interpreter this project uses the SDL library. The program itself maintains a 64x32 array of on/off pixels which is passed to SDL to render to the application window. This is useful because chip8 does not support color pixels so each pixel can be represented as on or off. The program also has a terminal output of each opcode that is run during the program for those who are curious or for troubleshooting purposes.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/chip8_tetris_1.gif"
            alt="running example"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Compatibility
        </Text>
        <h2 className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Since every chip-8 opcode is implemented in this interpreter, every program written in the chip-8 programming language will function with this project. This makes testing the program straightforward as any program found online should work properly.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/chip8_kalaid.gif"
            alt="another example of program functioning"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Specification
        </Text>
        <h2 className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This program follows all the chip-8 specification that can be found online on websites like <a href="https://en.wikipedia.org/wiki/CHIP-8">Wikipedia</a>. This includes things like all the different opcode implementations, register number, timer speed, and everything else required to make the interpreter consistent with other implementations.
        </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
