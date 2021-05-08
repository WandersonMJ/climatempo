import React, { useEffect, useContext } from "react";

import { Context } from "../../services";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineIdcard } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { schema, useYupValidationResolver } from "./schema";
import Button from "../../components/Button";
import Nuvem from "../../assets/nuvem.png";

import * as S from "./styles";

function Register() {
  const history = useHistory();
  const resolver = useYupValidationResolver(schema);

  const { Register } = useContext(Context);

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
    Register(data);
  };

  useEffect(() => {
    console.log("errors:::", errors);
  }, [errors]);

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.CloudImage src={Nuvem} />

      <S.StyledInput
        type="text"
        placeholder="Nome"
        {...register("name", { required: true })}
        Icon={<AiOutlineIdcard />}
        error={errors?.name && errors?.name?.message}
      />
      <S.StyledInput
        type="text"
        placeholder="E-mail"
        {...register("email", { required: true })}
        Icon={<HiOutlineMail />}
        error={errors?.email && errors?.email?.message}
      />
      <S.StyledInput
        type="password"
        placeholder="Senha"
        {...register("password")}
        Icon={<RiLockPasswordLine />}
        error={errors?.password && errors?.password?.message}
      />

      <S.WrapperButtons>
        <S.Link onClick={() => history.push("/login")}>Voltar</S.Link>

        <Button left={"57%"} type="submit">
          Cadastrar
        </Button>
      </S.WrapperButtons>
    </S.Container>
  );
}

export default Register;
