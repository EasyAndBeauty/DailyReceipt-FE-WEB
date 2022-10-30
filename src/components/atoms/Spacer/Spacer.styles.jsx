import styled from "styled-components";

const spacerSize = {
  sm: "12px",
  md: "24px",
  lg: "36px",
};

export const Spacer = styled.div`
  width:100%
  height:${(props) => spacerSize[props.size]};

`;
