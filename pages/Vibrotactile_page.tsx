import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Grid, Button, Text } from "@nextui-org/react";
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
        <a href="/">
          </a>
      </header>

      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20">
        <Text h1 size={50}  weight="bold">
            Vibrotactile Gloves
        </Text>
        <h2 className="mx-auto mt-2 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project was built for someone with Parkinsons disease. The idea stems from research conducted by Peter Tass at Stanford University who found that vibrotactile stimulation of 250hz in a specific pattern on a patient's fingers can decrease Parkinsons symptoms non-invasively. However, the glove used in the study is not yet available to the public and is also rumoured to cost thousands of dollars. This project attempts to replicate the glove used in the study. 
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            src="/Portfolio_Site/vibro_bothWithBattery.jpg"
            alt="image of completed gloves"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Components
        </Text>
        <h2 className="mx-auto mt-2 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            The only "necessary" components in this project are the 15000 rpm vibration motors, as those are what provide the vibrotactile stimulation, the rest of the components are there to run the motors in the pattern specified in the Stanford study.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            src="/Portfolio_Site/vibro_finger.jpg"
            alt="finger module"
            width={500}
            height={500}
          />
        </div>
        <h2 className="mx-auto mt-6 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Each vibration motor is attached to a long power and ground wire and then shrink-wrapped into a small module as shown above. These modules can be secured to the fingers to provide the vibrotactile stimulation. All the fingers for the glove attach to the control box attached to the back of the glove and pictured below.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            src="/Portfolio_Site/vibro_box.jpg"
            alt="control box"
            width={500}
            height={500}
          />
        </div>
        <h2 className="mx-auto mt-6 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The device itself is controlled with an arduino nano, which is loaded with the specific vibration pattern developed during the stanford study. The issue is all of the arduino output pins provide 5volts, and the vibration motors are only rated for 3.3volts, so a small voltage regulator is also placed in the box, soldered directly to the 5v pin on the arduino. The data pins that control which motor should be turned on are also soldered to transistors, allowing the arduino to control a 3.3volt current to the motors in the correct pattern. All the components are housed within a custom 3d printed box that is then strapped to the back of the glove.
        </h2>
        <Text className="mx-auto mt-2 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            The Glove
        </Text>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/Portfolio_Site/vibro_glove_back.jpg"
                  alt="back of gloves"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/Portfolio_Site/vibro_glove_front.jpg"
                  alt="front of gloves"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
        <h2 className="mx-auto mt-6 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The glove itself is only there to hold the components to the user's hands, so this glove was tailored to the user. The glove was made by cutting apart a pair of gardening gloves and stitching velcro to the back. This allows the fingers of the glove, made of nylon webbing, to be adjusted if needed. At the end of the fingers there is a loop of nylon webbing with velcro that allows the user to securely attach the vibration motors to the tips of their fingers.
        </h2>
        <Text className="mx-auto mt-2 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Power
        </Text>
        <h2 className="mx-auto mt-6 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The gloves are powerd by a 5v 2A power supply each, this is to make sure that the motors always have sufficient current and 5 volts is required for the arduino. Due to the weight of the batteries, it cannot be attached very easily to the glove itself, so the user can slip the battery between their palm and the glove to secure tha battery during use.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            src="/Portfolio_Site/vibro_battery.jpg"
            alt="batteries"
            width={500}
            height={500}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
