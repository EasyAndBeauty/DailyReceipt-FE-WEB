import * as S from "./UserPage.styles";
import { MyHeader } from "components/molecules/MyHeader";
import { MySection } from "components/organisms/MySection";
import { MyFooter } from "components/molecules/MyFooter";

export const UserPage = () => {
  return (
    <S.MyReceiptContainer>
      <MyHeader />
      <MySection />
      <MyFooter />
    </S.MyReceiptContainer>
  );
};
