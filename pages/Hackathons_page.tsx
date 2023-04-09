import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Table, Grid, Button, Text } from "@nextui-org/react";
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
      </header>
      <main className="flex flex-1 w-full flex-col items-top justify-top text-center px-4 sm:mt-20 mt-20 background-gradient-two">
      <Text className="text-lg" h1 size={50} weight="bold">
            Hackathons
        </Text>
        <h2  className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-10">
          Below is a list of all the hackathons I participated in, and the awards I have recieved at those hackathons.
        </h2>
        <h2  className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-10">
        </h2>
        <Table
      aria-label="Example table with static content"
      headerLined
      lineWeight={"light"}
      hoverable
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column align="center" >HACKATHON NAME</Table.Column>
        <Table.Column align="center">PARTICIPANT COUNT</Table.Column>
        <Table.Column align="center">AWARD WON</Table.Column>
        <Table.Column align="center">LINK TO PROJECT</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>2023 All-In Hackathon</Table.Cell>
          <Table.Cell>155</Table.Cell>
          <Table.Cell>Most Creative Use of Twilio API</Table.Cell>
          <Table.Cell><a href="https://devpost.com/software/emercontact">Emercontact</a></Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>EducateHacks2023</Table.Cell>
          <Table.Cell>678</Table.Cell>
          <Table.Cell>Results Unconfirmed</Table.Cell>
          <Table.Cell><a href="https://devpost.com/software/genielearn">GenieLearn</a></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
