import React, { useEffect, useContext } from "react";

import { Context } from "../../services";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import { schema, useYupValidationResolver } from "./schema";
import Button from "../../components/Button";
import Nuvem from "../../assets/nuvem.png";

import * as S from "./styles";

function Login() {
  const history = useHistory();
  const resolver = useYupValidationResolver(schema);

  const { Auth } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  const onSubmit = (data) => {
    try {
      Auth(data);
    } catch (err) {
      history.push("/login");
      console.log("err:::", err);
    }
  };

  useEffect(() => {
    console.log("errors:::", errors);
  }, [errors]);

  return (
    <>
      <S.CloudImage src={Nuvem} />
      <S.Container onSubmit={handleSubmit(onSubmit)} autocomplete="off">
        <S.StyledInput
          type="text"
          placeholder="E-mail"
          Icon={<HiOutlineMail />}
          {...register("email", { required: true })}
          error={errors?.email && errors?.email?.message}
        />
        <S.StyledInput
          type="password"
          placeholder="Senha"
          Icon={<RiLockPasswordLine />}
          {...register("password")}
          error={errors?.password && errors?.password?.message}
        />

        <S.WrapperButtons>
          <Button left={"30%"} type="submit">
            Entrar
          </Button>

          <S.Link onClick={() => history.push("/cadastrar")}>
            Cadastre-se
          </S.Link>
        </S.WrapperButtons>
      </S.Container>
    </>
  );
}

export default Login;
