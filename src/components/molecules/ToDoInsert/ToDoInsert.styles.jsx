import styled from "styled-components";

export const InsertForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 8px;
  width: 100%;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.wt};
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.wt};
  border-radius: 0;
  outline: none;

  &:focus {
    border-bottom-color: ${(props) => props.theme.green};
  }
`;

export const InputButton = styled.div`
  transform: scale(1.5);
  padding: 12px;
`;
