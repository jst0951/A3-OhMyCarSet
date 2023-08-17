import { CorrectionIcon } from '@/asset/icons';
import * as S from './DetailMultiItem.style';
import { useCurrentPackageDispatch, useCurrentPackageState } from '@/contexts/CurrentPackageProvider';
import { useEffect, useState } from 'react';
import fetchData from '@/utils/apis/fetchData';

type SelectOptionData = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
};

type DefaultOption = {
  trimId: number;
  trimName: string;
  defaultOptionCategoryDtoList: Array<{
    categoryname: string;
    defaultOptionDetailDtoList: ItemProps[];
  }>;
};

interface ItemProps {
  optionId: number;
  optionName: string;
  imgSrc: string;
}

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

const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

export default function DetailMultiItem() {
  const selectPackageState = JSON.parse(sessionStorage.getItem('myPalisade') || '').multi;
  const { filterId } = useCurrentPackageState();
  const [defaultOption, setDefaultOption] = useState<DefaultOption>();
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [isOption, setIsOption] = useState(true);
  const currentPackageDispatch = useCurrentPackageDispatch();

  const handleFilterOption = (idx: number) => {
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: idx + 1,
    });
  };

  const changeOption = () => {
    if (isOption) {
      setIsOption(false);
    } else {
      setIsOption(true);
    }
  };

  const fetchSetDefaultOption = async () => {
    try {
      const defaultOpion = await fetchData('default_option');
      setDefaultOption(defaultOpion[1]);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchSetDefaultOption();
  }, []);

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.TitleTextContainer onClick={changeOption}>
            <S.Title>{isOption ? '선택 옵션' : '기본 포함 품목 보기'}</S.Title>
            <S.SubTitle>{isOption ? '기본 포함 품목 보기' : '선택 옵션'}</S.SubTitle>
          </S.TitleTextContainer>
          <S.Price>{isOption && selectPackageState.totalPrice.toLocaleString() + ' 원'} </S.Price>
        </S.TitleContainer>
        {isOption ? (
          <>
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
          </>
        ) : (
          <>
            <S.FilterContainer>
              {filterCategory.map((category, idx) => (
                <S.FilterButton
                  key={idx}
                  $active={selectedCategory === idx - 1}
                  onClick={() => setSelectedCategory(idx - 1)}
                >
                  {category}
                </S.FilterButton>
              ))}
            </S.FilterContainer>
            <S.ListContainer>
              {selectedCategory === -1
                ? defaultOption &&
                  defaultOption.defaultOptionCategoryDtoList.map((categoryDto) =>
                    categoryDto.defaultOptionDetailDtoList.map((item: ItemProps) => (
                      <S.ItemContainer key={item.optionId}>
                        <S.MainLeft>
                          <S.ImgContainer>
                            <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} />
                          </S.ImgContainer>
                          <S.SelectedName>{item.optionName}</S.SelectedName>
                        </S.MainLeft>
                        <S.MainRight>
                          <S.OptionPrice>기본 포함</S.OptionPrice>
                        </S.MainRight>
                      </S.ItemContainer>
                    ))
                  )
                : defaultOption &&
                  defaultOption.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps) => (
                      <S.ItemContainer key={item.optionId}>
                        <S.MainLeft>
                          <S.ImgContainer>
                            <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} />
                          </S.ImgContainer>
                          <S.SelectedName>{item.optionName}</S.SelectedName>
                        </S.MainLeft>
                        <S.MainRight>
                          <S.OptionPrice>기본 포함</S.OptionPrice>
                        </S.MainRight>
                      </S.ItemContainer>
                    )
                  )}
            </S.ListContainer>
          </>
        )}
      </S.Section>
    </>
  );
}
