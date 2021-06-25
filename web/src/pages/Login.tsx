import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../hooks/accessTokens";

export const Login = (props: RouteComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("logging in");

        const response = await login({
          variables: {
            email: email,
            password: password,
          },
        });

        console.log(response);
        if (response && response.data) {
          setAccessToken(response.data.login.accessToken!);
        }
        props.history.push("/");
      }}
    >
      <FormLabel>Email address</FormLabel>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
