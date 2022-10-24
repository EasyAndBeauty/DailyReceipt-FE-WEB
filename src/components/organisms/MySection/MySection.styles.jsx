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
    display: flex;
    flex-direction: row;
  }
`;

export const ScrollMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: auto;
`

export const PaperContainer = styled.div`
  margin-top: -9.5rem;
  margin-left: -10rem;
  transform: scale(0.5);
  
  &:nth-child(1) {
  margin-left: -4.5rem;
  }
`;

export const CreatedDate = styled.div`
  margin-bottom: 0.5rem;
  font-family: Courier Prime;
  font-size: 1.5rem;
  text-align: left;
  color: #AAAAAA;
  line-height: 1rem;
  letter-spacing: -0.005em;
`