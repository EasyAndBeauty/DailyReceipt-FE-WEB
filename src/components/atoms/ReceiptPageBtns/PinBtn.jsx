import { ReactComponent as PinIcon } from "assets/svg/pin_icon.svg";
import { useState } from "react";
import styled from "styled-components";

export function PinBtn() {
  const [pinned, setPinned] = useState(false);

  function handlePin() {
    // todo: 서버로 pin 데이터 보내는 기능 추가
    console.log("pinned", !pinned);
    setPinned(!pinned);
  }

  return (
    <PinContainer onClick={handlePin} pinned={pinned}>
      <PinIcon />
      <span>{pinned ? "PINNED" : "PIN"}</span>
    </PinContainer>
  );
}

const PinContainer = styled.div`
  svg {
    transform: translateY(2px);
    fill: ${(props) => (props.pinned ? "#FEFEFE" : "none")};
  }
`;
