import html2canvas from "html2canvas";
import { ReactComponent as SaveIcon } from "assets/svg/save_icon.svg";
import dayjs from "dayjs";

export function SaveBtn({ date }) {
  // todo: userInfo를 가져와서 저장할 때 이름을 붙여줄 수 있도록 하기
  // 기존 코드에서는 userInfo는 있으나 set하는 부분이 없어서 주석처리함
  // const downloadFileName = `${userInfo ? `_` + userInfo : `my_receipt`}${
  const downloadFileName = `my_receipt ${date ? `_` + dayjs(date).format("YYYY-MM-DD") : ""}.png`;

  async function handleDownload() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    }).then((canvas) => {
      const aTag = document.createElement("a");
      document.body.appendChild(aTag);
      aTag.href = canvas.toDataURL("image/png");
      aTag.download = downloadFileName;
      aTag.click();
      document.body.removeChild(aTag);
    });
  }

  return (
    <div onClick={async () => await handleDownload()}>
      <SaveIcon />
      <span>SAVE</span>
    </div>
  );
}
