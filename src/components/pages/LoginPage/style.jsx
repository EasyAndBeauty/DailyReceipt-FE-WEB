import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
`;

export const H1 = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2.75rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  margin-top: 5.5rem;
  flex-direction: row;
`;

export const Btn = styled.button`
  width: 100%;
  background-color: transparent;
  margin-bottom: 3rem;
`;
