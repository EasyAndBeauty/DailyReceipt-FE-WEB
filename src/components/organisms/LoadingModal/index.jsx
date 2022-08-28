import * as S from "./style";
import ReactLoading from "react-loading";
import { Portal } from "components";

/**
 * LodaingModal
 *
 * 로딩 모달 컴포넌트,
 *
 * @returns {JSX.Element} 로딩 모달 컴포넌트
 */
export function LoadingModal() {
    return (
        <Portal>
            <S.Background>
                {/* <ReactLoading
          type={"spin"}
          color={"black"}
          height={"5%"}
          width={"5%"}
        /> */}
            </S.Background>
        </Portal>
    );
}
