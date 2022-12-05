import { ReactComponent as PinIcon } from "assets/svg/pin_icon.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useReceiptClient } from "controllers/receiptController";
import { AbortIfError } from "controllers/error";

export function PinBtn({ isPinned }) {
  const client = useReceiptClient();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (isPinned) setPinned(true);
  }, [isPinned]);

  const handlePin = async () => {
    if (!isPinned) {
      const famousSaying = sessionStorage.getItem("famous_saying");
      const todos = sessionStorage.getItem("todos");
      const userName = "test";

      try {
        await client.postPinnedReceipt({
          todos,
          famous_saying: famousSaying,
          receipt_name: userName,
          pinned: true,
        });
      } catch (error) {
        AbortIfError(error);
      }
    }
    if (isPinned) {
      const id = "todo";
      await client.updatePinnedReceipt({ pinned: false }, id);
    }
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
