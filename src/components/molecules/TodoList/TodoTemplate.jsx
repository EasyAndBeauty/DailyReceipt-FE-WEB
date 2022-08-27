import React from "react";
import styled from "styled-components";

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  padding: 16px;
  border-radius: 16px;
`;
