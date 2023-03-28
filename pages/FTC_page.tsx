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
        <a href="https://ftc-events.firstinspires.org/team/14296">
          <Button 
                href="#"
                shadow
                color="gradient"
                bordered
                auto
                >
                View Team History and Awards
              </Button>
          </a>
      </header>
      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20">
      <Text className="text-lg" h1 size={50} weight="bold">
            FTC Robotics
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          I participated in the 2022-2023 FTC robotics season on team 14296. As our team robot evolved over the season, it became more and more important to adapt to the dynamic nature of the challenge. In this years challenge, one of the most beneficial tasks was to recognize the signal cone placed on the field during the match. The computer vision system that allowed our robot to detect this signal cone was my biggest contribution to the robot.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/ftc_robot.png"
            alt="picture of FTC robot"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            System Overview
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The system relies on a 720p webcam that is mounted to the front of the robot. When necessary, the webcam will take an image of what it sees and send it to a TFLITE machine learning model for inference on the frame. The TFLITE model will detect which orientation the signal cone is in and will instruct the robot to respond accordingly. In the case of this year's challange, the robot will move to a specific area designated by the signal cone's orientation.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            className = "mt-6"
            src="/Portfolio_Site/ftc_webcam.png"
            alt="webcam"
            width={500}
            height={500}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            TFLITE Model
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The processor mounted on the robot is not powerfull enough to perform inferences on a typical TFOD model and still perform normally with other tasks, so our solution was to use a TFLITE model which is designed to run on typically weaker hardware. The most important step of the process for creating a reliable image detection system is the training of the TFLITE model. In past iterations of this system, the detection was not reliable in different conditions due to a limited dataset. After creating a much improved dataset, the detection of the signal cone in different conditions was much more reliable. Our final dataset contained nearly 2000 images of the signal cone in different lighting conditions, orientations, angles to the webcam and other factors that led to a more varied dataset. After these improvements the system became very reliable.
        </h2>
        <Grid.Container gap={1} justify="center">
            <Grid justify="center" xs={12} sm={3}>
            <Image
                  src="/Portfolio_Site/ftc_greendetect.png"
                  alt="Green orientation detection"
                  width={300}
                  height={300}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={3}>
            <Image
                  src="/Portfolio_Site/ftc_reddetect.png"
                  alt="red orientation detection"
                  width={300}
                  height={300}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={3}>
            <Image
                  src="/Portfolio_Site/ftc_yellowdetect.png"
                  alt="yellow orientation detection"
                  width={300}
                  height={300}
                />
            </Grid>
          </Grid.Container>
          <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            Awards and Achievements
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          At the state-level FTC championship our team qualified as the number 1 team and got second overall in the entire state. We also recieved the Control Award sponsored by Arm, Inc. for our innovative drive system and computer vision system. We also recieved 2nd place for the Innovate award and 3rd place for the Motivate award.
        </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
