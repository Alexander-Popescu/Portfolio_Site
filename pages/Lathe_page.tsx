import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Grid, Text } from "@nextui-org/react";
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
      </header>
      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20">
      <Text className="text-lg" h1 size={50} weight="bold">
            CNC Lathe
        </Text>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Purpose and Overview
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project was made to help create wooden rolling pins with a high degree of accuracy. Adding computer control functionality to a wood turning lathe allows much longer rolling pins to remain almost perfectly flat for the entire length.
        </h2>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To produce a part on this lathe, you first generate a G-code file and send it to the arduino mounted nearby, mount a stock of wood between the head and tailstock, and begin to spin the lathe. After pressing start to send the G-code the machine will begin to cut the stock of wood to the shape specified in the G-code file. More details about this process are documented below.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/lathe_handle.gif"
            alt="lathe in action"
            width={500}
            height={500}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Construction
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The main body of the lathe has a cast iron core to which everything is mounted. attached to each side are linear rails for the carriage to move along. These linear rails are attached to aluminum extrusions which are mounted to the cast iron with metal angle brackets. To make sure the two rails were perfectly parallel, the angle brackets were tightened slightly and then the rails were lightly tapped until they were perfectly level and parallel.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/lathe_mainbody.png"
            alt="Main body of lathe"
            width={700}
            height={700}
          />
        </div>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The head and tailstocks of this machine were taken off of a JET JML-1014, with the spindles replaced with spindles that better grip the wood used on this project. The stocks are mounted on the cast iron center of the lathe.
        </h2>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/lathe_tailstock.png"
                  alt="Lathe headstock"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/lathe_headstock.png"
                  alt="lathe tailstock"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The carriage of the lathe is mounted to the linear rails on the body of the lathe. Due to the precision required, it is very important to reduce backlash as much as possible so that the z-axis position readings are accurate. To solve this the carriage is attached to two ball screws on either side of the lathe, both of which are driven by an independant z-axis stepper motor.
        </h2>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/lathe_ballscrew.png"
                  alt="ball screw along body"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/lathe_zstepper.png"
                  alt="z-axis stepper motors"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Mounted to the lathe carriage is a quick change toolpost to attach toolholders with different clearances if required. Also attached to the carriage is an x-axis stepper motor so that the cutting tool is able to move in and out to cut whatever work is mounted to the lathe.
        </h2>
        <Grid.Container gap={1} justify="center">
            <Grid justify="center" xs={12} sm={5}>
            <Image
                  src="/lathe_QCTP.png"
                  alt="Quick change toolpost"
                  width={500}
                  height={500}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={5}>
            <Image
                  src="/lathe_xstepper.png"
                  alt="x-axis stepper motor"
                  width={500}
                  height={500}
                />
            </Grid>
          </Grid.Container>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Computer Control
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To control all the stepper motors, some electronic hardware is required. This project uses an arduino UNO to control the stepper motors. Also attached close to the arduino are 3 stepper motor drivers to provide the nessecary power to the moters. To power everything, a 24 Volt power supply is also mounted nearby.
        </h2>
        <Grid.Container gap={1} justify="center">
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/lathe_board.png"
                  alt="Electronics Board"
                  width={500}
                  height={500}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/Lathe_arduino.png"
                  alt="arduino"
                  width={500}
                  height={500}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/lathe_driver.png"
                  alt="stepper driver"
                  width={500}
                  height={500}
                />
            </Grid>
          </Grid.Container>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Translating from G-code to stepper movement
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To make sure that the G-code file will work accurately on this specific machine, a program called Universal G-code Sender (UGS) is used to send the G-code created by the cad software to the arduino. UGS takes lots of important factors into account, such as the pitch of the ball screw, the microsteps for the stepper motors, etc, to make sure that the G-code will translate properly on the lathe.
        </h2>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To actually interpret the G-code sent by UGS, the arduino UNO is running a program called GRBL. GRBL takes the G-code file and translates the G-code into instructions that the stepper motors can understand. GRBL is a very optimized program so that it is able to run on the arduino's relatively weak processor.
        </h2>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            CAD
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          So the system is able to properly interpret and execute a G-code file, but it still cant create a G-code file. This is where Fusion360, a CAD software, comes in. Fusion allows you to create a model of the object you want to create, and then fine tune the G-code. This can be useful when you want to have the first few passes be "rough passes" meant to take off a lot of material and other passes be "finishing passes" which will go slower but have a nicer finish when completed. Fusion360 then creates a G-code file with the specifications given during the design process.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/lathe_fusion.png"
            alt="Fusion360 screenshot"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            The Cutting Tool
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The cutting tool used in this project is a VCGT331 aluminum cutter according to the ANSI insert designation standard. This project uses 3 different tool holders to hold this cutting tool at different angles for different clearance levels when required. To handle the tool offset, the work coordinate system, or G-codes 54-59, are used to make sure the cutting location is consistent across tool changes.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/lathe_cuttingtool.png"
            alt="cutting tool"
            width={700}
            height={700}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
