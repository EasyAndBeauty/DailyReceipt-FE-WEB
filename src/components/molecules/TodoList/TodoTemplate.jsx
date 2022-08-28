import React from "react";
import styled from "styled-components";

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`;
