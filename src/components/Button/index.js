import React from "react";

import * as S from "./styles";

function Button({ type, children, onClick, top, left }) {
  return (
    <S.Container top={top} left={left}>
      <S.Button type={type} onClick={onClick}>
        {children}
      </S.Button>
    </S.Container>
  );
}

export default Button;
