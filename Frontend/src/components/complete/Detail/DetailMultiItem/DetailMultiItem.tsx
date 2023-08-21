import * as S from './DetailMultiItem.style';
import { useEffect, useState } from 'react';
import fetchData from '@/utils/apis/fetchData';
import DetailItem from '../DetailItem/DetailItem';

type SelectPackageData = {
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
    key: 'all',
    text: '전체',
  },
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
  const [defaultOption, setDefaultOption] = useState<DefaultOption>();
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [isOption, setIsOption] = useState(true);
  let allOption: ItemProps[] = [];
  let allSelected: SelectPackageData[] = [];

  defaultOption &&
    defaultOption.defaultOptionCategoryDtoList.map((categoryDto) => {
      categoryDto.defaultOptionDetailDtoList.map((item: ItemProps) => (allOption = [...allOption, item]));
    });

  selectPackageState.subList.map((selectedCategoryData: SelectPackageData[]) => {
    selectedCategoryData.map((data: SelectPackageData) => {
      allSelected = [...allSelected, data];
    });
  });

  const handleFilterOption = (idx: number) => {
    setSelectedFilter(idx);
  };

  const changeOption = () => {
    if (isOption) {
      setIsOption(false);
    } else {
      setIsOption(true);
    }
  };

  const fetchDefaultOption = async () => {
    try {
      const defaultOpion = await fetchData('default_option');
      setDefaultOption(defaultOpion[1]);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchDefaultOption();
  }, []);

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.TitleTextContainer>
            <S.Title>{isOption ? '선택 옵션' : '기본 포함 품목 보기'}</S.Title>
            <S.SubTitle onClick={changeOption}>{isOption ? '기본 포함 품목 보기' : '선택 옵션'}</S.SubTitle>
          </S.TitleTextContainer>
          <S.Price>{isOption && selectPackageState.totalPrice.toLocaleString() + ' 원'} </S.Price>
        </S.TitleContainer>
        {isOption ? (
          <>
            <S.FilterContainer>
              {optionList.map((option, idx) => (
                <S.FilterButton key={idx} $active={selectedFilter === idx} onClick={() => handleFilterOption(idx)}>
                  {option.text}
                </S.FilterButton>
              ))}
            </S.FilterContainer>
            <S.ListContainer>
              {selectedFilter === 0 ? (
                allSelected.length ? (
                  allSelected.map((data: SelectPackageData) => (
                    <S.ItemContainer key={data.name}>
                      <DetailItem data={data} index={selectedFilter} />
                    </S.ItemContainer>
                  ))
                ) : (
                  <S.EmptyContainer>해당 카테고리에 선택된 옵션이 없습니다.</S.EmptyContainer>
                )
              ) : selectPackageState.subList[selectedFilter].length > 0 ? (
                selectPackageState.subList[selectedFilter].map((data: SelectPackageData) => (
                  <S.ItemContainer key={data.id}>
                    <DetailItem data={data} index={selectedFilter} />
                  </S.ItemContainer>
                ))
              ) : (
                <S.EmptyContainer>해당 카테고리에 선택된 옵션이 없습니다.</S.EmptyContainer>
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
                ? allOption.map((item: ItemProps) => (
                    <S.ItemContainer key={item.optionId}>
                      <DetailItem data={item} />
                    </S.ItemContainer>
                  ))
                : defaultOption &&
                  defaultOption.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps) => (
                      <S.ItemContainer key={item.optionId}>
                        <DetailItem data={item} />
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
