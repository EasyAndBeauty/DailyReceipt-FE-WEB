import { useNavigate } from "react-router-dom";
import { ReceiptPaper } from "components";
import * as S from "./MySection.styles";
import { formatReceiptDate } from "helper/formatter";
import { useFetchReceipt } from "hooks/useReceipts";
/**
 * MySection
 *
 * My page의 중간 부분입니다.
 * 영수증을 작성할 수 있는 버튼과, 영수증을 보여주는 컴포넌트가 있습니다.
 *
 * */
export const MySection = () => {
  const navigate = useNavigate();
  const { pinnedReceipts: receipts } = useFetchReceipt();

  const renderReceipts = (receipts) => {
    const pinnedReceipts = receipts.map((receipt) => {
      return (
        <S.PaperContainer key={receipt.id}>
          <S.CreatedDate>{receipt.date && formatReceiptDate(receipt.date)}</S.CreatedDate>
          {/* TODO: receipt id,명언 확인 */}
          <ReceiptPaper
            onClick={() => {
              navigate(`/receipt`, { state: { todos: receipt.todos, pinned: receipt.pinned } });
            }}
            todos={Array.from(receipt.todos)}
            key={receipt.id}
            quote={receipt.famous_saying}
          />
        </S.PaperContainer>
      );
    });

    return pinnedReceipts;
  };

  const renderBlankPage = () => {
    return (
      <S.BlankContainer>
        <S.BlankTitle>Pinned Receipts</S.BlankTitle>
        <S.BlankText>
          <p>보관한 영수증이 없어요.</p>
          <p>보관해서 모아보고 싶은 하루가 있다면</p>
          <p>
            영수증을 만든 후에 <span>PIN</span>버튼을 눌러보세요!
          </p>
        </S.BlankText>
      </S.BlankContainer>
    );
  };

  return (
    <S.Container>
      <S.ScrollMenu>
        {receipts.length > 0 ? renderReceipts(receipts) : renderBlankPage()}
      </S.ScrollMenu>
    </S.Container>
  );
};
