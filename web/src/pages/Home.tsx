import { Center, Grid } from "@chakra-ui/react";
import React from "react";
import { BackgroundInput } from "../components/BackgroundInput";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Keyboard } from "../components/Keyboard";
import { TextDisplay } from "../components/TextDisplay";
import { TypingSpeed } from "../components/TypingSpeed";
import { useUsersQuery } from "../generated/graphql";

type Props = {};

export const Home = (props: Props) => {
  const { data, loading } = useUsersQuery({ fetchPolicy: "network-only" });

  // if (!data) {
  //   return <div>loading...</div>;
  // }

  return (
    <Center>
      <Grid width="800px" overflow="hidden">
        <Header />
        <TypingSpeed />
        <TextDisplay />
        <Keyboard />
        <BackgroundInput />
        <Footer />
      </Grid>
    </Center>
  );
};
