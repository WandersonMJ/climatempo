import React, { useContext } from "react";
import { FaAlignJustify, FaSistrix } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { useHistory } from "react-router-dom";

import { Context } from "../../services";

import * as S from "./styles";

function Menu({ children }) {
  const history = useHistory();
  const pathname = window.location.pathname.replace("/", "");

  const { Logout } = useContext(Context);

  const routes = {
    Buscar: {
      onClick: () => history.push("/"),
      label: "",
      icon: <FaSistrix color="#fff" size={21} />,
    },
    Histórico: {
      onClick: () => history.push("/historico"),
      label: "historico",
      icon: <FaAlignJustify color="#fff" size={21} />,
    },
    Logout: {
      onClick: () => {
        history.push("/login");
        Logout();
      },
      label: "login",
      icon: <BiLogOut color="#fff" size={24} />,
    },
  };

  return (
    <S.Container>
      <S.Menu>
        <S.WrapRoutes>
          {Object.entries(routes)?.map(([key, value]) => (
            <S.WrapItem
              active={value.label === pathname}
              pathname={pathname}
              key={key}
              onClick={value.onClick}
            >
              <S.Item>{key}</S.Item>
              {value.icon}
            </S.WrapItem>
          ))}
        </S.WrapRoutes>
      </S.Menu>
      {children}
    </S.Container>
  );
}

export default Menu;
