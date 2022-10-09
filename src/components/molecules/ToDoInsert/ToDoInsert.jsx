import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ToDoInsert.styles";

/**
 * Todo Insert
 *
 * todo를 추가하는 컴포넌트 입니다.
 *
 * @param {Function} onInsert - todo 추가 함수
 * @returns
 */
export function ToDoInsert({ onInsert }) {
	const [todoInput, setTodoInput] = useState("");

	const handleChangeContentValue = e => {
		setTodoInput(e.target.value);
	};

	const onClickTodoItemCreateButton = e => {
		if (todoInput.trim() !== "") {
			e.preventDefault();
			const todoItem = { task: todoInput, timer: 0, isDone: false };
			onInsert(todoItem);
			setTodoInput("");
		}
	};

	const onSubmit = e => {
		onClickTodoItemCreateButton(e);
	};

	return (
		<S.InsertForm onSubmit={onSubmit}>
			<S.Input
				autoFocus
				placeholder="Add a New Task"
				onChange={handleChangeContentValue}
				value={todoInput}
			/>
			<S.InputButton onClick={onClickTodoItemCreateButton}>
				<FontAwesomeIcon icon={faCheck} color={"#81c944"} />
			</S.InputButton>
		</S.InsertForm>
	);
}
