import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.gray};
  border-radius: 20px 20px 0 0;
  color: ${(props) => props.theme.bk};
  font-size: 1rem;
  font-family: "Courier Prime", monospace;
  text-align: center;
  height: 66px;
  width: 100%;
  position: fixed;
  margin-top: 3rem;
  bottom: 0;

  div {
    position: relative;
    top: -2px;
  }
`;
