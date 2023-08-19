import { useEffect, useState } from 'react';
import * as S from './DefaultOption.style';
import RectFilterButton from '@/components/common/button/RectFilterButton/RectFilterButton';
import Item from './Item/Item';
import Icon from '@/components/common/Icon';
import fetchData from '@/utils/apis/fetchData';

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

interface Props {
  getAPI: boolean;
}
const MAX_ITEM_NUM = 5;
const MAX_ALL_ITEM_NUM = 123;
const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

export default function DefaultOption({ getAPI }: Props) {
  const [defaultOption, setDefaultOption] = useState<DefaultOption[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [showMore, setShowMore] = useState(0);

  const moreEventHandler = () => {
    setShowMore(showMore + 1);
  };

  const filterEventHandler = (index: number) => {
    setSelectedCategory(index - 1);
    setShowMore(0);
  };

  const fetchSetDefaultOption = async () => {
    try {
      const defaultOpion = await fetchData('default_option');
      setDefaultOption(defaultOpion);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    if (!getAPI) return;
    fetchSetDefaultOption();
  }, [getAPI]);

  console.log(defaultOption);
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
          {defaultOption.map((trim) => (
            <S.ItemLine key={trim.trimId}>
              {selectedCategory === -1
                ? trim.defaultOptionCategoryDtoList.map((categoryDto) =>
                    categoryDto.defaultOptionDetailDtoList.map((item: ItemProps) => (
                      <S.ItemContainer
                        key={item.optionId}
                        $showMore={Math.floor((item.optionId - 1) / MAX_ITEM_NUM) <= showMore}
                      >
                        <Item item={item} />
                      </S.ItemContainer>
                    ))
                  )
                : trim.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps, optionIndex: number) => (
                      <S.ItemContainer
                        key={item.optionId}
                        $showMore={Math.floor(optionIndex / MAX_ITEM_NUM) <= showMore}
                      >
                        <Item item={item} />
                      </S.ItemContainer>
                    )
                  )}
            </S.ItemLine>
          ))}
        </S.OptionContainer>
        {selectedCategory === -1
          ? MAX_ALL_ITEM_NUM > (showMore + 1) * MAX_ITEM_NUM && (
              <S.MoreButtonContainer onClick={moreEventHandler}>
                더보기
                <Icon icon="ArrowBottomIcon" size={20} />
              </S.MoreButtonContainer>
            )
          : defaultOption[0].defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.length >
              (showMore + 1) * MAX_ITEM_NUM && (
              <S.MoreButtonContainer onClick={moreEventHandler}>
                더보기
                <Icon icon="ArrowBottomIcon" size={20} />
              </S.MoreButtonContainer>
            )}
      </S.Container>
    </>
  );
}
