import * as S from './Detail.style';
import DetailItem from './DetailItem/DetailItem';
import DetailMultiItem from './DetailMultiItem/DetailMultiItem';
import { SelectOptionData } from './DetailItem/DetailItem';

export default function Detail() {
  const myPalisadeValue = JSON.parse(sessionStorage.getItem('myPalisade') || '');
  const tempTotal = myPalisadeValue.single.totalPrice + myPalisadeValue.multi.totalPrice;

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 자세히 보기</S.Title>
          <S.RightTitle>
            <S.SubTitle>차량 총 견적 금액</S.SubTitle>
            <S.TotalPrice>{tempTotal.toLocaleString()} 원</S.TotalPrice>
          </S.RightTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {myPalisadeValue.single.dataList.map((data: SelectOptionData, index: number) => (
            <DetailItem key={data.id} data={data} index={index} />
          ))}
          <DetailMultiItem />
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
