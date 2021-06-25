import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useRegisterMutation } from "../generated/graphql";

export const Register = (props: RouteComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("form submitted");

        const response = await register({
          variables: {
            email: email,
            password: password,
          },
        });

        console.log(response);
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
      <Button type="submit">Register</Button>
    </form>
  );
};
