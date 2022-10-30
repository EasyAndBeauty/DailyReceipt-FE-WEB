import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  z-index: 999;
  position: fixed;
  top: 0;
  text-align: center;
  transform: translateY(110%);
  animation-name: ${(props) => props.isOpen !== null && (props.isOpen ? "open" : "close")};
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-duration: 0.5s;

  @keyframes open {
    from {
      transform: translateY(110%);
    }
    to {
      transform: translateY(3%);
    }
  }
  @keyframes close {
    from {
      transform: translateY(3%);
    }
    to {
      transform: translateY(110%);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  padding: 10px;
  position: relative;
  overflow: scroll;
  background-color: #191919;
`;
