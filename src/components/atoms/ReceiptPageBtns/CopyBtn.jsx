import { ReactComponent as CopyIcon } from "../../../assets/svg/copy_icon.svg";
import html2canvas from "html2canvas";

export function CopyBtn() {
  const { ClipboardItem } = window;

  async function handleCopy() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    })
      .then((canvas) => {
        canvas.toBlob((blob) => {
          navigator.clipboard.write([
            new ClipboardItem(
              Object.defineProperty({}, blob.type, {
                value: blob,
                enumerable: true,
              }),
            ),
          ]);
        });
      })
      .then(alert("복사가 완료되었어요 :)"));
  }

  return (
    <div onClick={async () => await handleCopy()}>
      <CopyIcon />
      <span>COPY</span>
    </div>
  );
}
