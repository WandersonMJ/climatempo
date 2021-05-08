import React, { useState, useEffect } from "react";

import * as S from "./styles";

function History() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    setLoading(true);
    //Fazer a requisição
    setLoading(false);
    setData([
      {
        id: "1",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "2",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "3",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "4",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "5",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "6",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "7",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "8",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
      {
        id: "9",
        cep: "18200-240",
        cidade: "Itapetininga",
        estado: "SP",
        data: "04/05/2021",
      },
    ]);
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
              <S.Text>{item?.data}</S.Text>
              <S.Text>{item?.cep}</S.Text>
            </S.WrapperColumn>
            <S.WrapperColumn>
              <S.Text>{item?.cidade}</S.Text>
              <S.Text>{item?.estado}</S.Text>
            </S.WrapperColumn>
          </S.Item>
        ))}
      </S.TableHistory>
    </S.Container>
  );
}

export default History;
