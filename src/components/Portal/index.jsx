import { createPortal } from "react-dom";

/**
 * Portal component
 *
 * childern 컴포넌트를 'modal' id를 가진 태그로 바인딩 한다
 *
 * @param {React.Component} children 자식 컴포넌트
 * @returns {React.Component} modal에 바인딩 된, 자식 컴포넌트
 */
export function Portal({ children }) {
  return createPortal(<>{children}</>, document.getElementById("modal"));
}
