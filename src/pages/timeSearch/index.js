import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";

import Input from "../../components/Input";

import * as S from "./styles";

function TimeSearch() {
  const [value, setValue] = useState(false);
  const [hasError, setHasError] = useState("");
  const [data, setData] = useState({});

  async function getCEP(url) {
    return await fetch(url).then((res) => res.json());
  }

  async function getWeather(city, state) {
    return await fetch(
      `https://api.hgbrasil.com/weather?key=f3f49a64&city_name=${city},${state}`,
      {
        mode: "no-cors",
        method: "HEAD",
        headers: {
          Accept: "application/json",

          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
        credentials: "same-origin",
        crossdomain: true,
      }
    ).then((res) => console.log("res:::", res));
  }

  async function getDataCEP(cep) {
    const replacedCep = cep ? cep.replace("_", "").replace("-", "") : "";

    if (!cep || replacedCep.length < 8) {
      setHasError("CEP inválido");
      return;
    }

    try {
      const response = await getCEP(
        `http://viacep.com.br/ws/${replacedCep}/json/`
      );

      if (response?.erro) {
        setHasError("Esse CEP não existe");
        setData({});
        return;
      }

      const weather = await getWeather(response?.localidade, response?.uf);

      console.log("weather:::", weather);

      setData({
        Cidade: response?.localidade,
        Rua: response?.logradouro,
        CEP: response?.cep,
        Bairro: response?.bairro,
        Estado: response?.uf,
      });
    } catch (err) {
      setHasError("Esse CEP não existe");
    }
  }

  return (
    <S.Container>
      <Input
        type="tel"
        mask="99999-999"
        placeholder="00000-000"
        onChange={(e) => {
          setHasError("");
          setData({});
          setValue(e.target.value);
        }}
        Icon={
          <FaSistrix
            size={26}
            onClick={() => {
              setData({});
              getDataCEP(value);
            }}
          />
        }
      />

      {hasError && <S.Error>{hasError}</S.Error>}

      {Object.keys(data).length > 0 && (
        <S.WrapperData>
          {Object.entries(data)?.map(([key, value]) => (
            <S.Rows key={key}>
              {key}: {value}
            </S.Rows>
          ))}
        </S.WrapperData>
      )}
    </S.Container>
  );
}

export default TimeSearch;
