import { useEffect, useState } from 'react';
import * as S from './DefaultOption.style';
import RectFilterButton from '@/components/common/button/RectFilterButton/RectFilterButton';
import Item from './Item/Item';

import fetchData from '@/utils/apis/fetchData';
import ShowMoreButton from '@/components/common/button/ShowMoreButton/ShowMoreButton';

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
  description: string;
  imgSrc: string;
}

interface Props {
  isFetched: boolean;
}

const MAX_ITEM_NUM = 5;
const MAX_ALL_ITEM_NUM = 123;
const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

export default function DefaultOption({ isFetched }: Props) {
  const [defaultOption, setDefaultOption] = useState<DefaultOption[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [showMore, setShowMore] = useState(0);
  const allOption: ItemProps[][] = [[], [], [], []];

  defaultOption.map((trim, trimIndex) => {
    trim.defaultOptionCategoryDtoList.map((categoryDto) =>
      categoryDto.defaultOptionDetailDtoList.map(
        (item: ItemProps) => (allOption[trimIndex] = [...allOption[trimIndex], item])
      )
    );
  });

  const moreEventHandler = () => {
    setShowMore(showMore + 1);
  };

  const filterEventHandler = (index: number) => {
    setSelectedCategory(index - 1);
    setShowMore(0);
  };

  const fetchDefaultOption = async () => {
    try {
      const defaultOpion = await fetchData('default_option');
      setDefaultOption(defaultOpion);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    if (isFetched) fetchDefaultOption();
  }, [isFetched]);

  return (
    <>
      <S.Container>
        <S.ButtonLine>
          {filterCategory.map((category, index) => (
            <RectFilterButton
              key={index - 1}
              type={index - 1 === selectedCategory ? 'selected' : 'notselected'}
              page="mainFilter"
              onClick={() => {
                filterEventHandler(index);
              }}
            >
              {category}
            </RectFilterButton>
          ))}
        </S.ButtonLine>
        <S.OptionContainer>
          {defaultOption.map((trim, trimIndex) => (
            <S.ItemLine key={trim.trimId}>
              {(selectedCategory === -1
                ? allOption[trimIndex]
                : trim.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList
              ).map((item: ItemProps, itemIndex) => (
                <S.ItemContainer key={item.optionId} $showMore={Math.floor(itemIndex / MAX_ITEM_NUM) <= showMore}>
                  <Item item={item} />
                </S.ItemContainer>
              ))}
            </S.ItemLine>
          ))}
        </S.OptionContainer>
        <ShowMoreButton
          itemArrayLength={
            selectedCategory === -1
              ? MAX_ALL_ITEM_NUM
              : defaultOption[0].defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.length
          }
          width={140}
          showLength={(showMore + 1) * MAX_ITEM_NUM}
          onClick={moreEventHandler}
        />
      </S.Container>
    </>
  );
}
