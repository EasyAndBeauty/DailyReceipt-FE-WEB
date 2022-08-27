import styled from "styled-components";

export function ReceiptPaperInfo() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const timeArr = date.toLocaleString("ko-KR").split(" ").at(-1).split(":");
  const time = timeArr.map((el) => el.padStart(2, "0")).join(":");

  return (
    <Info>
      <div>
        {month} {day}, {year} {time}
      </div>
    </Info>
  );
}

const Info = styled.div`
  transform: translateX(4px);
  align-self: flex-start;
`;
