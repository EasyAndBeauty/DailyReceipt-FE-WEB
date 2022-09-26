import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
    width: 100%;
    height: 100%;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    dispaly: flex;
    flex-direction: row;
  }
`;

export const PaperContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: scale(0.5);
  margin-top: -100px;
`;
