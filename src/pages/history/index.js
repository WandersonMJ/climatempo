import React, { useState, useEffect } from "react";
import api from "../../services/api";
import moment from "moment";

import * as S from "./styles";

function History() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setData([]);
    setLoading(true);

    const response = await api.get("/pesquisa", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      responseType: "json",
    });

    setLoading(false);
    setData(response?.data);
  }, []);

  if (loading && data.length < 1) {
    return (
      <S.Container>
        <S.TableHistory center>
          <S.Loading />
        </S.TableHistory>
      </S.Container>
    );
  }

  if (!loading && data.length < 1) {
    return (
      <S.Container>
        <S.TableHistory center>
          <S.Text>Não possuí nenhum registro.</S.Text>
        </S.TableHistory>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.TableHistory>
        {data?.map((item) => (
          <S.Item key={item.id}>
            <S.WrapperColumn>
              <S.Text>{item?.IP}</S.Text>
              <S.Text>{item?.endereco}</S.Text>
            </S.WrapperColumn>
            <S.WrapperColumn>
              <S.Text>{item?.cidade}</S.Text>
              <S.Text>{item?.estado}</S.Text>
            </S.WrapperColumn>
            <S.WrapperColumn data>
              <S.Text>{moment(item?.created_at)?.format("DD/MM/YYYY")}</S.Text>
            </S.WrapperColumn>
          </S.Item>
        ))}
      </S.TableHistory>
    </S.Container>
  );
}

export default History;
