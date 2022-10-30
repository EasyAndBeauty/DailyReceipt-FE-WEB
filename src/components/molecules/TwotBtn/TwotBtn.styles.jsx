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
  position: absolute;
  bottom: ${wh * 0.05}px;
  span {
    color: ${(props) => props.theme.wt};
    min-width: ${wv}px;
    white-space: nowrap;
  }
`;

export const ButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

export const Button1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.red};
  font-size: 1rem;
  font-weight: 400;
  font-family: "Courier Prime", monospace;
  text-align: center;
`;

export const Button2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.wt};
  font-size: 1rem;
  font-weight: 400;
  font-family: "Courier Prime", monospace;
  text-align: center;

  ${(props) =>
    props.active &&
    `
    font-weight: 700;
    `}
`;
