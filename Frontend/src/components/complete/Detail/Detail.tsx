import * as S from './Detail.style';
import DetailItem from './DetailItem/DetailItem';
import DetailMultiItem from './DetailMultiItem/DetailMultiItem';
import { SelectOptionData } from '@/contexts/SelectOptionProvider';

export default function Detail() {
  const myPalisadeSession = JSON.parse(sessionStorage.getItem('myPalisade') || '');
  const totalPrice = myPalisadeSession.single.totalPrice + myPalisadeSession.multi.totalPrice;
  const myPalisadeTrim = [
    {
      id: 0,
      imgSrc: myPalisadeSession.single.dataList[3].imgSrc,
      price: 43460000,
      selectedId: 1,
      selectedName: '팰리세이드 Le Blanc (르블랑)',
      stepName: '트림',
    },
  ];
  const myPalisadeArray = [...myPalisadeTrim, ...myPalisadeSession.single.dataList];

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 자세히 보기</S.Title>
          <S.RightTitle>
            <S.SubTitle>차량 총 견적 금액</S.SubTitle>
            <S.TotalPrice>{totalPrice.toLocaleString()} 원</S.TotalPrice>
          </S.RightTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {myPalisadeArray.map((data: SelectOptionData, index: number) => (
            <S.Section key={data.id}>
              <S.SectionTitleContainer>
                <S.SectionTitle>{data.stepName}</S.SectionTitle>
                <S.SectionPrice>{data.price.toLocaleString()} 원</S.SectionPrice>
              </S.SectionTitleContainer>
              <DetailItem data={data} index={index} />
            </S.Section>
          ))}
          <DetailMultiItem />
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
