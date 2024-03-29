import * as S from './DetailMultiItem.style';
import { useEffect, useState } from 'react';
import fetchData from '@/utils/apis/fetchData';
import DetailItem from '../DetailItem/DetailItem';
import ShowMoreButton from '@/components/common/button/ShowMoreButton/ShowMoreButton';

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

type PackageAllProps = {
  id: number;
  packageData: Array<SelectPackageData>;
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

const MAX_ITEM_NUM = 3;
const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

export default function DetailMultiItem() {
  const selectPackageState = JSON.parse(sessionStorage.getItem('myPalisade') || '').multi;
  const [defaultOption, setDefaultOption] = useState<DefaultOption>();
  const [selectedFilter, setSelectedFilter] = useState<number>(-1);
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [showMore, setShowMore] = useState(0);
  const [isOption, setIsOption] = useState(true);
  let allOption: ItemProps[] = [];
  let allOptionLength = 0;
  let allSelected: PackageAllProps[] = [];
  let allSelectedLength = 0;
  let allSelectedIndex = -1;

  defaultOption &&
    defaultOption.defaultOptionCategoryDtoList.forEach((categoryDto) => {
      categoryDto.defaultOptionDetailDtoList.forEach((item: ItemProps) => {
        allOption = [...allOption, item];
        allOptionLength++;
      });
    });

  selectPackageState.subList.forEach((selectedCategoryData: SelectPackageData[], categoryIndex: number) => {
    const packageObject = {
      id: categoryIndex,
      packageData: selectedCategoryData,
    };
    allSelected = [...allSelected, packageObject];
    allSelectedLength = allSelectedLength + selectedCategoryData.length;
  });

  const handleFilterOption = (idx: number) => {
    setSelectedFilter(idx);
  };

  const changeOption = () => {
    if (isOption) {
      setIsOption(false);
      setShowMore(0);
    } else {
      setIsOption(true);
      setShowMore(0);
    }
  };

  const moreEventHandler = () => {
    setShowMore(showMore + 1);
  };

  const filterEventHandler = (index: number) => {
    setSelectedCategory(index - 1);
    setShowMore(0);
  };

  const filterOptionHandler = (index: number) => {
    handleFilterOption(index - 1);
    setShowMore(0);
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
                <S.FilterButton key={idx} $active={selectedFilter === idx - 1} onClick={() => filterOptionHandler(idx)}>
                  {option.text}
                </S.FilterButton>
              ))}
            </S.FilterContainer>
            <S.ListContainer>
              {selectedFilter === -1 ? (
                allSelectedLength > 0 ? (
                  allSelected.map((categoryData: PackageAllProps) =>
                    categoryData.packageData.map((selectedPackage: SelectPackageData) => {
                      allSelectedIndex++;

                      return (
                        <S.ItemContainer
                          key={selectedPackage.name}
                          $showMore={Math.floor(allSelectedIndex / MAX_ITEM_NUM) <= showMore}
                        >
                          <DetailItem data={selectedPackage} index={categoryData.id} />
                        </S.ItemContainer>
                      );
                    })
                  )
                ) : (
                  <S.EmptyContainer>선택된 옵션이 없습니다.</S.EmptyContainer>
                )
              ) : selectPackageState.subList[selectedFilter].length > 0 ? (
                selectPackageState.subList[selectedFilter].map((data: SelectPackageData, dataIndex: number) => (
                  <S.ItemContainer key={data.id} $showMore={Math.floor(dataIndex / MAX_ITEM_NUM) <= showMore}>
                    <DetailItem data={data} index={selectedFilter} />
                  </S.ItemContainer>
                ))
              ) : (
                <S.EmptyContainer>해당 카테고리에 선택된 옵션이 없습니다.</S.EmptyContainer>
              )}
              <ShowMoreButton
                itemArrayLength={
                  selectedFilter === -1 ? allSelectedLength : selectPackageState.subList[selectedFilter].length
                }
                width={1024}
                showLength={(showMore + 1) * MAX_ITEM_NUM}
                onClick={moreEventHandler}
              />
            </S.ListContainer>
          </>
        ) : (
          <>
            <S.FilterContainer>
              {filterCategory.map((category, idx) => (
                <S.FilterButton
                  key={idx}
                  $active={selectedCategory === idx - 1}
                  onClick={() => filterEventHandler(idx)}
                >
                  {category}
                </S.FilterButton>
              ))}
            </S.FilterContainer>
            <S.ListContainer>
              {selectedCategory === -1
                ? allOption.map((item: ItemProps, itemIndex: number) => (
                    <S.ItemContainer key={item.optionId} $showMore={Math.floor(itemIndex / MAX_ITEM_NUM) <= showMore}>
                      <DetailItem data={item} />
                    </S.ItemContainer>
                  ))
                : defaultOption &&
                  defaultOption.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps, itemIndex: number) => (
                      <S.ItemContainer key={item.optionId} $showMore={Math.floor(itemIndex / MAX_ITEM_NUM) <= showMore}>
                        <DetailItem data={item} />
                      </S.ItemContainer>
                    )
                  )}
              {defaultOption && (
                <ShowMoreButton
                  itemArrayLength={
                    selectedCategory === -1
                      ? allOptionLength
                      : defaultOption.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.length
                  }
                  width={1024}
                  showLength={(showMore + 1) * MAX_ITEM_NUM}
                  onClick={moreEventHandler}
                />
              )}
            </S.ListContainer>
          </>
        )}
      </S.Section>
    </>
  );
}
