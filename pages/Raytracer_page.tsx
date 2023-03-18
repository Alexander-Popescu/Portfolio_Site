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
        <a href="https://github.com/Alexander-Popescu/Raytracing">
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
            Rust Raytracer
        </Text>
        <h2 className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project can generate realistic looking images completely from scratch using a raytracing algorithm. All of the images on this page were created using this project, and the entire project was written in the rust programming language.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/raytracer_finalrender.png"
            alt="final render of raytracer"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Supported Materials
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project supports 3 different materials: a diffuse material (Lambertian), a reflective metal material, and a dielectric material. The material effects how the rays will reflect off of spheres and what color properties are changed on the reflection.
        </h2>
        <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            Lambertian Sphere
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The lambertian material diffuses incoming light in all directions, this has the effect of producing a "matte" appearance on the surface of the sphere. This material also has a color property to affect the color of the reflected light.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/raytracer_diffuse.png"
            alt="diffuse sphere (matte)"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            Metallic Sphere
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The metal material reflects light perfectly as a mirror would. The metal material also has a color value to give a different appearance, for example gold, and also has a property to affect the randomness of the reflected rays, giving the material a fuzzier appearance. 
        </h2>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/raytracer_metal.png"
                  alt="reflective metal sphere"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/raytracer_metal_fuzz.png"
                  alt="matte-like gold metal sphere"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
          <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            Glass Spheres
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          For the glass spheres, or dielectric spheres, the light rays are refracted rather than reflected, producing an inverted reflection when looking at the sphere. The sphere also has no shadow as light rays still reach the underside of the sphere. To produce a realistic result for these spheres, the algorithm implements Snell's law and a Schlick approximation to distort the light further at larger angles. 
        </h2>
          <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/raytracer_dielectric.png"
            alt="glass sphere"
            width={700}
            height={700}
          />
        </div>
          <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            Positionable Camera
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The position of all the objects in the scene are independant of the camera, allowing the camera to be positioned anywhere in the space. The camera also contains changeable parameters such as the aspect ratio, aperture size, focus distance, look direction, and field of view.
        </h2>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/raytracer_evenlyspaced.png"
                  alt="evenly spaced spheres from a high angle"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={6}>
            <Image
                  src="/raytracer_evenlyspaced_lower.png"
                  alt="evenly spaced spheres with a closer camera"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
          <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            Depth of Field
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Defocus blur, or the depth of field effect is an effect that occurs in real photographs, and so implementing it can add realism to the generated images. Below are examples of how depth of field effects the output image, from a factor of 0 to 5. Note that the colors of the spheres are randomized and that defocus blur only effects the blurring effect around the edges of the image.
        </h2>
        <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/raytracer_noDOF.png"
                  alt="reflective metal sphere"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/raytracer_2DOF.png"
                  alt="matte-like gold metal sphere"
                  width={700}
                  height={700}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={4}>
            <Image
                  src="/raytracer_5DOF.png"
                  alt="matte-like gold metal sphere"
                  width={700}
                  height={700}
                />
            </Grid>
          </Grid.Container>
          <Text className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={25}  weight="bold">
            How the project works
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          To create an output image, spheres can be added to the scene through the example in the main function. When executed, the program will print the image data to the terminal, and can be redirected to an output file in the PPM P3 image format. All parameters for the camera, scene objects, materials, etc. are configurable in the main function.
        </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
