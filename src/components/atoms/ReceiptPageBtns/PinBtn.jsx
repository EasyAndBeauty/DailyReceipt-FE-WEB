import { ReactComponent as PinIcon } from "assets/svg/pin_icon.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useReceiptClient } from "controllers/receiptController";
import { AbortIfError } from "controllers/error";
import { PinnedModal } from "components/organisms/PinnedModal";

export function PinBtn({ isPinned }) {
  const client = useReceiptClient();
  const [pinned, setPinned] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    if (isPinned) setPinned(true);
  }, [isPinned]);

  const handlePin = async () => {
    if (!isPinned) {
      const famousSaying = sessionStorage.getItem("famous_saying");
      const todos = JSON.parse(sessionStorage.getItem("todos"));
      const userName = "test";

      try {
        const response = await client.postPinnedReceipt({
          todos,
          famous_saying: famousSaying,
          receipt_name: userName,
          pinned: true,
        });
        const receiptId = response.data;
        console.log(receiptId);
        setVisibleModal(!pinned);
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

  const closePinnedModal = () => {
    setVisibleModal(false);
  };

  return (
    <PinContainer onClick={handlePin} pinned={pinned}>
      <PinIcon />
      <span>{pinned ? "PINNED" : "PIN"}</span>
      {visibleModal && <PinnedModal onClose={closePinnedModal} />}
    </PinContainer>
  );
}

const PinContainer = styled.div`
  svg {
    transform: translateY(2px);
    fill: ${(props) => (props.pinned ? "#FEFEFE" : "none")};
  }
`;
