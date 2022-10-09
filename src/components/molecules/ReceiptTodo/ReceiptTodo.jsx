import { ELLIPSISLENGTH } from "helper/constants";
import * as S from "./ReceiptTodo.styles";

/**
 * ReceiptTodo
 *
 * 영수증의 할일을 나타내는 컴포넌트입니다
 *
 * @param {string} task 할일
 * @param {string} timer 할일의 시간
 *
 * @returns
 */

const makeEllipsis = (str, len) => {
	if (str.length > len) {
		return str.slice(0, len) + "...";
	}
	return str;
};

export function ReceiptTodo({ children: { task, timer } }) {
	return (
		<S.Container>
			<S.Info />
			<S.Todo>
				<S.Task>{makeEllipsis(task, ELLIPSISLENGTH)}</S.Task>
				<S.Timer>
					{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
				</S.Timer>
			</S.Todo>
		</S.Container>
	);
}
