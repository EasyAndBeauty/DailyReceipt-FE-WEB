import styled from "styled-components";

export const BtnContainer = styled.button`
  width: 16.25rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
  line-height: 150%;

  ${(props) =>
    props.color &&
    `
      background-color: ${props.color};
      opacity: 0.7;
      &:hover {
        background-color: ${props.color}
        opacity: 0.9;
        ;
      }
      &:active {
        background-color: ${props.color}
        opacity: 0.9;
        ;
      }
    `}
`;
