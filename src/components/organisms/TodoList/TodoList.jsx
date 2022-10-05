import { ToDoInsert, TodoListBlock } from "components";
import * as S from "./TodoList.styles";
/**
 * TodoList
 *
 * todo 리스트를 보여주는 컴포넌트 입니다.
 *
 * @param {Array} todos todo 리스트
 * @param {Function} onInsert todo 추가 함수
 * @param {Function} onRemove todo 삭제 함수
 * @param {Function} onEdit todo 수정 함수
 *
 * @returns {JSX.Element} TodoInsert Todo 추가 컴포넌트
 * @returns {JSX.Element} TodoListBlock todo 리스트를 보여주는 컴포넌트
 */

const TodoTemplate = ({ children }) => {
  return <S.TodoTemplateBlock>{children}</S.TodoTemplateBlock>;
};

export function TodoList({
  todos,
  onInsert,
  onRemove,
  onEdit,
  onOpenBottomSheet,
}) {
  return (
    <TodoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <TodoListBlock
        todos={todos}
        onRemove={onRemove}
        onEdit={onEdit}
        onOpenBottomSheet={onOpenBottomSheet}
      />
    </TodoTemplate>
  );
}
