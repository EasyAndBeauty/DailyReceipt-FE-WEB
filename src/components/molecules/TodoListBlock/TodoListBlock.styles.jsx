import styled from "styled-components";

export const TodoItemBlock = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  box-sizing: border-box;
`;

export const CheckCircle = styled.div`
  width: 16px;
  height: 16px;
  border: 3px solid ${(props) => props.theme.gray};
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.done ? props.theme.green : props.theme.bk};
  border-color: ${(props) => props.theme.wt};
`;

export const TodoItemText = styled.input`
  width: 60%;
  margin-left: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme.gray};
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.wt};
  border-radius: 0;
  background-color: transparent;

  &:disabled {
    color: ${(props) => props.theme.wt};
    border: none;
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const TimerButton = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  padding: 4px;
  line-height: 1rem;
  cursor: pointer;

  &:first-child {
    transform: scale(1.3) translateY(0.5px) translateX(1px);
  }
`;

export const TodoListBlockStyle = styled.ul`
  width: 100%;
`;
