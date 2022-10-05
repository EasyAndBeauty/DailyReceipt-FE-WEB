import { BottomSheetTemplate } from "components";

/**
 * PomodoroBottomSheet
 *
 * 뽀모도로 아이콘을 누르면 올라와야함
 * 첫 시작 위치가 botoom -10% - height여야하고
 * 끝나는 위치가 bottom -10% + height여야함
 *
 * 내릴려 할때, 또는 stop을 눌렀을때 bottom sheet가 내려가야함
 *
 *
 * @returns
 */

export function PomodoroBottomSheet({ isOpen, onClick }) {
  return (
    <BottomSheetTemplate isOpen={isOpen}>
      <button onClick={onClick}>test</button>
    </BottomSheetTemplate>
  );
}
