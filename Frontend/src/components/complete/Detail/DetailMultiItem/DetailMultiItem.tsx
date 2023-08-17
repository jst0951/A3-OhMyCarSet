import { CorrectionIcon } from '@/asset/icons';
import * as S from './DetailMultiItem.style';
import { useCurrentPackageDispatch, useCurrentPackageState } from '@/contexts/CurrentPackageProvider';

type SelectOptionData = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
};

const optionList = [
  {
    key: 'system',
    text: '시스템',
  },
  {
    key: 'temperature',
    text: '온도관리',
  },
  {
    key: 'external_device',
    text: '외부장치',
  },
  {
    key: 'internal_device',
    text: '내부장치',
  },
];

export default function DetailMultiItem() {
  const selectPackageState = JSON.parse(sessionStorage.getItem('myPalisade') || '').multi;
  const { filterId } = useCurrentPackageState();
  const currentPackageDispatch = useCurrentPackageDispatch();

  const handleFilterOption = (idx: number) => {
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: idx + 1,
    });
  };

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.TitleTextContainer>
            <S.Title>선택 옵션</S.Title>
            <S.SubTitle>기본 포함 품목 보기</S.SubTitle>
          </S.TitleTextContainer>
          <S.Price>{selectPackageState.totalPrice.toLocaleString()} 원</S.Price>
        </S.TitleContainer>
        <S.FilterContainer>
          {optionList.map((option, idx) => (
            <S.FilterButton key={idx} $active={filterId === idx + 1} onClick={() => handleFilterOption(idx)}>
              {option.text}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
        <S.ListContainer>
          {selectPackageState.subList[filterId - 1].length > 0 ? (
            selectPackageState.subList[filterId - 1].map((data: SelectOptionData) => (
              <S.ItemContainer key={data.id}>
                <S.MainLeft>
                  <S.ImgContainer>
                    <img src={`${import.meta.env.VITE_STATIC_API_URL}/${data.imgSrc}`} />
                  </S.ImgContainer>
                  <S.SelectedName>{data.name}</S.SelectedName>
                </S.MainLeft>
                <S.MainRight>
                  <S.OptionPrice>+ {data.price} 원</S.OptionPrice>
                  <S.Correction>
                    <CorrectionIcon />
                    수정
                  </S.Correction>
                </S.MainRight>
              </S.ItemContainer>
            ))
          ) : (
            <S.EmptyContainer>Empty Option</S.EmptyContainer>
          )}
        </S.ListContainer>
      </S.Section>
    </>
  );
}
