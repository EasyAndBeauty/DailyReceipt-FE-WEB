import { useEffect, useState } from "react";
import styled from "styled-components";
import { usePinnedReceipt } from "hooks/useReceipts";
import { ReactComponent as PinIcon } from "assets/svg/pin_icon.svg";

export function PinBtn({ isPinned, openModal }) {
  const { postPinReceipt, updatePinReceipt } = usePinnedReceipt();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (isPinned) setPinned(true);
  }, [isPinned]);

  const handlePin = async () => {
    if (!isPinned) {
      postPinReceipt();
      openModal();
    }
    if (isPinned) updatePinReceipt();

    setPinned(!pinned);
  };

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
