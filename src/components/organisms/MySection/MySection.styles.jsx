import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  padding: 10px;
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
  align-items: flex-start;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PaperContainer = styled.div`
  transform: scale(0.5);
  transform-origin: center 0;
  margin-left: -10rem;
  &:nth-child(1) {
    margin-left: -4.5rem;
  }
`;

export const CreatedDate = styled.div`
  margin-bottom: 0.5rem;
  font-family: Courier Prime;
  font-size: 1.5rem;
  text-align: left;
  color: #aaaaaa;
  line-height: 1rem;
  letter-spacing: -0.005em;
`;

export const BlankContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlankTitle = styled.div`
  font-family: "Courier Prime";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: -0.005em;

  color: #efefef;
`;

export const BlankText = styled.div`
  p {
    font-family: "Gothic A1";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 168.5%;
    /* or 27px */

    letter-spacing: -0.005em;

    color: #757575;
    span {
      color: #efefef;
    }
  }
`;
