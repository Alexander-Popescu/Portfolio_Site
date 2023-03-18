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
        <a href="https://github.com/Alexander-Popescu/Sentiboost">
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
        <Text h1 size={50}  weight="bold">
            Sentiboost
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project was built with the goal of detecting fake news articles in mind. The project uses a BERT natural-language-processing model to detect similarities between the language used in pre-identified fake news articles and the user's input article
        </h2>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <Image
            src="/Portfolio_Site/sentiboost_input.png"
            alt="sentiboost text input screen"
            width={700}
            height={700}
          />
        </div>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            How does it work?
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The output of the analyzer consists of two parts: the output from the model and a statistical comparison. First, the program will indicate whether the user's input article was indicated to be more similar to fake or reliable news via the BERT language model. The language model was trained over thousands of pre-labeled news articles to make inferences between fake and reliable news. Below is what a user might see if their input was reliable or possibly unreliable .
        </h2>
          <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={100}>
            <Image
              src="/Portfolio_Site/sentiboost_green.png"
              alt="sentiboost success page"
              width={1000}
              height={1000}
            />
            </Grid>
            <Grid justify="center" xs={12} sm={100}>
            <Image
              src="/Portfolio_Site/sentiboost_red.png"
              alt="sentiboost failure page"
              width={1000}
              height={1000}
            />
            </Grid>
          </Grid.Container>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          Below that, the user will see the second part of the output, the statistical comparison. The dataset used to train the model was also evaluated on several other factors that could infer if a piece of text was reliable or not. These factors include things like the number of quotes used throughout the article, the average word density in a sentence, etc. After each of the articles in the dataset were evaluated based on these metrics, the data was plotted and then a logistic regression curve was calculated for each of the graphs. These curves roughly represent the probability of an article being reliable or not based on solely that individual metric. The user's input article is then analyzed on these metrics as well, and that value is plotted on the same graphs so that the user may see how their input compares to the dataset.
        </h2>
          <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={12} sm={100}>
            <Image
                  src="/Portfolio_Site/sentiboost_statistics_one.png"
                  alt="sentiboost success page"
                  width={1000}
                  height={1000}
                />
            </Grid>
            <Grid justify="center" xs={12} sm={100}>
            <Image
                  src="/Portfolio_Site/sentiboost_statistics_two.png"
                  alt="sentiboost success page"
                  width={1000}
                  height={1000}
                />
            </Grid>
          </Grid.Container>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          The user is also informed about how the graphs should be interpreted.
        </h2>
        <Text className="mx-auto mt-12 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7" h1 size={30}  weight="bold">
            How can it be used?
        </Text>
        <h2 className="mx-auto mt-6 max-w-l text-lg sm:text-gray-400  text-gray-500 leading-7">
          This project was built as a flask web app and so it can be hosted locally or on the web. Once the flask server is running any user is able to take full advantage of the program through just a web browser, with all of the computations being handled by the back-end.
        </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
