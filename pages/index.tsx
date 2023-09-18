import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Sentiboost } from "../components/Sentiboost";
import { Raytracer } from "../components/Raytracer";
import { Lathe } from "../components/Lathe";
import { Chip8 } from "../components/Chip8";
import { FTC } from "../components/FTC";
import { Hackathons } from "../components/Hackathons";
import { Vibrotactile } from "../components/Vibrotactile";
import { OctoCMM } from "../components/OctoCMM";
import { Text, Grid} from '@nextui-org/react';
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Alexander Popescu</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 mainClass">
        <Text h1 size={40}  weight="bold" className="background-gradient">
            Alexander Popescu's
        </Text>
        <Text h1 size={80} css={{ textGradient: "120deg, $purple600 -100%, $blue600 20%, $link 50%, $blue600 80%, $purple600 200%"}} weight="bold">
              -Project Repository-
        </Text>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          All of these projects were made during my free time. The source code is available on Github, when applicable.
        </h2>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Raytracer />
          </Grid>
          <Grid xs={12} sm={4}>
            <Lathe />
          </Grid>
          <Grid xs={12} sm={4}>
            <Chip8 />
          </Grid>
          <Grid xs={12} sm={4}>
            <FTC />
          </Grid>
          <Grid xs={12} sm={4}>
            <Vibrotactile />
          </Grid>
          <Grid xs={12} sm={4}>
            <OctoCMM />
          </Grid>
          <Grid xs={12} sm={4}>
            <Hackathons />
          </Grid>
          <Grid xs={12} sm={4}>
            <Sentiboost />
          </Grid>
        </Grid.Container>
          
      </main>
      <Footer />
    </div>
  );
};

export default Home;
