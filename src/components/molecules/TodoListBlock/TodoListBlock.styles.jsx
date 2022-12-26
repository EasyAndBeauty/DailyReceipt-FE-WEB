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
  border-color: ${(props) => (props.done ? "rgba(200,200,200,0.25)" : props.theme.wt)};
  svg {
    transform: scale(1.15) translate(-2px, -3px);
    stroke: ${(props) => props.theme.green};
  }
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
  height: calc(75vh - 100px);
  overflow-y: scroll;

  @media (min-height: 1024px) {
    height: 72vh;
  }

  @media (min-height: 1400px) {
    height: 76vh;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  li:last-child {
    margin-bottom: 96px;
  }
`;
