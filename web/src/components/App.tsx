import React, { useEffect, useState } from "react";
import { setAccessToken } from "../hooks/accessTokens";
import { Home } from "../pages/Home";
import { Routes } from "./Routes";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      console.log("calling refresh token api");
      const res = await x.json();
      setAccessToken(res.accessToken);
      console.log(res);
      setLoading(false);
    });
  }, []);

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return <Home />;
};
