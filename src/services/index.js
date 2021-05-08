import React, { createContext, useState } from "react";

// import api from "./api";

export const Context = createContext({
  token: "",
  setToken: () => {},
  Register: () => {},
  Auth: () => {},
  Logout: () => {},
});

const Provider = ({ children }) => {
  const [token, setToken] = useState("");

  async function Register({ name, email, password }) {
    console.log("name, email, password:::", name, email, password);

    //criar a conta
    // const reponse = await api.post("/user", {
    //   name,
    //   email,
    //   password,
    // });

    // console.log("reponse:::", reponse);
    // setToken(response?.data?.token);

    // setToken("a");
  }

  async function Auth({ email, password }) {
    console.log("email, password:::", email, password);

    //fazer requisição passando email e senha
    // const reponse = await api.post("/auth/login", {
    //   email,
    //   password,
    // });

    // console.log("reponse:::", reponse);
    // setToken(response?.data?.token);

    setToken("a");
  }

  async function Logout() {
    // await api.post("/auth/logout");
    setToken("");
  }

  return (
    <Context.Provider value={{ token, setToken, Auth, Logout, Register }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
