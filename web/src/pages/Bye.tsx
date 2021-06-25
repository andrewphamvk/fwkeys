import React from "react";
import { useByeQuery } from "../generated/graphql";

type Props = {};

export const Bye = (props: Props) => {
  const { data, error, loading } = useByeQuery({ fetchPolicy: "network-only" });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>err</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return <div>{data.bye}</div>;
};
