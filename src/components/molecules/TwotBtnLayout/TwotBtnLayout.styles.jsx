import styled from "styled-components";

const wh = window.innerHeight;
const wv = Math.floor(window.innerWidth) / 8;

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: ${(props) => (props.isAbsolute ? "absolute" : "")};
  bottom: ${wh * 0.05}px;
  color: ${(props) => props.theme[props.lineColor]};
  span {
    color: ${(props) => props.theme[props.lineColor]};
    min-width: ${wv}px;
    white-space: nowrap;
  }
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1.5px dashed;
  height: 1.5px;
  width: 80%;
  margin-top: 1rem;
`;
