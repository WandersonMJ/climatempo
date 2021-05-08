import React, { forwardRef } from "react";

import * as S from "./styles";

const Input = forwardRef(
  (
    {
      value,
      hasError,
      type,
      placeholder,
      mask,
      onChange,
      Icon,
      top,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <S.WrapInput error={error}>
        <S.WrapperInput hasValue={value} top={top} hasError={hasError}>
          <S.InputCEP
            // ref={ref}
            type={type}
            placeholder={placeholder}
            mask={mask}
            onChange={onChange}
            {...props}
          />
          {Icon}
        </S.WrapperInput>
        {error && <S.Error top={top}>{error}</S.Error>}
      </S.WrapInput>
    );
  }
);

export default Input;
