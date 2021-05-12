import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "./api";

export const Context = createContext({
  token: "",
  setToken: () => {},
  Register: () => {},
  Auth: () => {},
  Logout: () => {},
});

const Provider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("TOKEN", token);
  }, [token]);

  useEffect(() => {
    const oldToken = localStorage.getItem("TOKEN");
    setToken(oldToken);
  }, []);

  async function Register({ name, email, password }) {
    // criar a conta
    try {
      const response = await api.post(
        "/user",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          responseType: "json",
        }
      );

      setToken(response?.data?.token);
      history.push("/");
    } catch (err) {
      throw err;
    }
  }

  async function Auth({ email, password }) {
    //fazer requisição passando email e senha
    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          responseType: "json",
        }
      );

      setToken(response?.data?.token);

      history.push("/");
    } catch (err) {
      throw err;
    }
  }

  async function Logout() {
    try {
      await api.post(
        "/auth/logout",
        { token },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          responseType: "json",
        }
      );
      setToken("");
      history.push("/");
    } catch (err) {
      console.log("err:::", err);
    }
  }

  return (
    <Context.Provider value={{ token, setToken, Auth, Logout, Register }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
