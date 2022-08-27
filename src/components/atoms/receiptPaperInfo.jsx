import styled from "styled-components";

export function ReceiptPaperInfo() {
  const date = new Date();
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthArr[date.getMonth()].toUpperCase();
  const day = date.getDate();
  const year = date.getFullYear();
  const time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`

  return (<Info>
      <div>{month} {day}, {year} {time}</div>
    </Info>)
}

const Info = styled.div`
  transform: translateX(4px);
  align-self: flex-start;
`;