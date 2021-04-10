import Header from "./Header";
import TextDisplay from "./TextDisplay";
import Keyboard from "./Keyboard";
import BackgroundInput from "./BackgroundInput";
import TypingSpeed from "./TypingSpeed";
import { Center, Grid } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { gql, useMutation, useQuery } from "@apollo/client";

function App() {
  const [login, { data }] = useMutation(gql`
    mutation {
      login(email: "andrewpham.vk@outlook.com", password: "andrew") {
        accessToken
      }
    }
  `);

  var result = login();
  console.log(result);

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
}

export default App;
