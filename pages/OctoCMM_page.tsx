import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Grid, Text, Button } from "@nextui-org/react";
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
        <a href="https://github.com/Alexander-Popescu/OctoPrint-Octocmm">
          <Button
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
            OctoCMM
        </Text>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Purpose and Overview
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          For measuring part surfaces, curvatures, and tolerances, many companies use a CMM or coordinate measuring machine. However, these machines normally cost upwards of $30,000 on the low end, so it is not feasible for individuals or small companies to purchase one of these.
        </h2>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project, dubbed "OctoCMM" attempts to utilize a cheap 3d printer gantry (~$200) along with the bed level sensor attached on the printer to probe points on inserted parts. The theory is that the resolution of the bed level sensor will be sufficient at least for rough surface calculations of any part that is placed on the print bed.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/cmm_timelapse.gif"
            alt="CMM in action"
            width={500}
            height={500}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Methodology
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The printer's mainboard can only really do one thing, interpret G-code commands. Luckily, a lot of work has gone into printer-companion apps that often run on a raspberry pi or other nearby computer. A popular application is called "Octoprint". As hinted at by the name of this project, the implementation will be a plugin for Octoprint. The user will be able to interact with the printer through the web interface and specify all the points that they wish to probe on the inserted part.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/cmm_home.jpg"
            alt="Octoprint Home Screen"
            width={700}
            height={700}
          />
        </div>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The problem is that the printer has no idea where to probe the part that is sitting on the print bed, and because of the large size of the carriage, probing in the wrong spots will cause damage to either the part or the print head. This is why it us up to the user to provide the plugin with the points they wish to probe, and the plugin will use the high resolution bed level sensor to probe the points. The user can configure many different features of the plugin through the settings menu, including the point input file, the output file location, and more.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <Image
                className = "mt-6"
                src="/Portfolio_Site/cmm_settings.jpg"
                alt="plugin settings Screen"
                width={700}
                height={700}
            />
          </div>
          <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Now that the plugin has been configured and the input points have been determined, it is up to the user to begin the probing process. It is as simple to start as pressing the "Start Probing" button on the plugin tab of OctoCMM, where the user can also look at the state of the machine and other useful variables.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <Image
                className = "mt-6"
                src="/Portfolio_Site/cmm_tab.jpg"
                alt="plugin tab Screen"
                width={700}
                height={700}
            />
          </div>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The plugin also provides setup instructions and a tutorial on how to use the plugin to probe parts on the printer.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <Image
                className = "mt-6"
                src="/Portfolio_Site/cmm_printer.jpg"
                alt="printer picture"
                width={700}
                height={700}
            />
          </div>
          <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            While still not perfect, I hope that this project can be built upon in the future so that coordinate measuring can become more affordable, as many in the space already have 3d printers. I can see improvements ranging from a more squared off aluminum extrusion frame to an improved bed sensor using IR or laser-based detection systems.
          </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
