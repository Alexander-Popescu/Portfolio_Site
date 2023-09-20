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
        <a href="https://www.shadertoy.com/user/AlexanderPopescu">
          <Button
                shadow
                color="gradient"
                bordered
                auto
                >
                View Shaders on Shadertoy
              </Button>
          </a>
      </header>
      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20">
      <Text className="text-lg" h1 size={50} weight="bold">
            Fragment Shaders
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            While looking into OpenGL and the graphics pipeline, I came across fragment shaders, a pretty cool way to generate computer graphics using the GPU. I upload most of my shaders to a website called Shadertoy, which renders them in the browser and also lets you embed a shader renderer into another website such as this one.
        </h2>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            The shaders I have written so far are fragment shaders. These shaders are special because when used alone, instead of using a vertex shader to define the shape of geometry to then be rasterized, a fragment shader will render a frame pixel by pixel. This allows some pretty cool techniques to be used to create visuals more easily than other methods. (It can also sometimes run faster because the code is executed by the GPU)
        </h2>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            RayMarching
        </Text>
        <h2 className="mx-auto mt-6 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            Raymarching, similar to Raytracing, renders geometry using rays. However a raymarcher will be "marched" down the direction vector until it gets sufficiently close to a function that calculates the signed distance to that geometry. This pipeline allows for some pretty cool visuals, like this merge effect generated by taking the smoothminimum of two SDF functions.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <iframe width="640" height="360" src="https://www.shadertoy.com/embed/ctBfzd?gui=true&t=10&paused=true&muted=false"></iframe>
        </div>
          <h2 className="mx-auto mt-8 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            It doesnt end there though, similarly to how we can interpolate the edges of geometry, we can do a similar effect with color to smoothly transition between the colors of objects.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <iframe width="640" height="360" src="https://www.shadertoy.com/embed/mdtcWn?gui=true&t=10&paused=true&muted=false"></iframe>
        </div>
          <h2 className="mx-auto mt-8 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            With a little more playing around, we can make this cool little demo scene where multiple shapes blend together with geometry and color interpolation:
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <iframe width="640" height="360" src="https://www.shadertoy.com/embed/msdyDn?gui=true&t=10&paused=true&muted=false"></iframe>
        </div>
        <h2 className="mx-auto mt-8 mb-8 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
            Finally to finish it off, we can add some changes to the SDF functions that displace the surface geometry of the shapes in cool ways:
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
            <iframe width="640" height="360" src="https://www.shadertoy.com/embed/mddcW4?gui=true&t=10&paused=true&muted=false"></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
