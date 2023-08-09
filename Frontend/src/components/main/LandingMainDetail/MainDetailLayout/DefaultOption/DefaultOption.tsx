import { useState } from 'react';
import * as Style from './DefaultOption.style';
import RectFilterButton from '@/components/common/button/RectFilterButton/RectFilterButton';
import Item from './Item/Item';

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

interface DefaultOptionProps {
  defaultOption: DefaultOption[];
}

const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

export default function DefaultOption({ defaultOption }: DefaultOptionProps) {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [showMore, setShowMore] = useState('none');

  const moreEventHandler = () => {
    showMore === 'none' ? setShowMore('flex') : setShowMore('none');
  };

  const filterEventHandler = (index: number) => {
    setSelectedCategory(index - 1);
    setShowMore('none');
  };

  return (
    <>
      <Style.LineTitle>기본 옵션</Style.LineTitle>
      <Style.Container>
        <Style.ButtonLine>
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
        </Style.ButtonLine>
        <Style.OptionContainer>
          {defaultOption.map((trim) => (
            <Style.ItemLine key={trim.trimId}>
              {selectedCategory === -1
                ? trim.defaultOptionCategoryDtoList.map((categoryDto) =>
                    categoryDto.defaultOptionDetailDtoList.map((item: ItemProps) => (
                      <>{itemContianer(item, showMore)}</>
                    ))
                  )
                : trim.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps, optionIndex: number) => <>{itemContianer(item, showMore, optionIndex)}</>
                  )}
            </Style.ItemLine>
          ))}
        </Style.OptionContainer>
        <Style.MoreButtonContainer onClick={moreEventHandler}>더보기</Style.MoreButtonContainer>
      </Style.Container>
    </>
  );
}

const itemContianer = (item: ItemProps, showMore: string, index?: number) => {
  if (index === undefined) {
    return item.optionId < 5 ? (
      <Style.ItemContainer>
        <Item item={item}></Item>
      </Style.ItemContainer>
    ) : (
      <Style.MoreItemContainer $showMore={showMore}>
        <Item item={item}></Item>
      </Style.MoreItemContainer>
    );
  } else {
    return index < 5 ? (
      <Style.ItemContainer>
        <Item item={item}></Item>
      </Style.ItemContainer>
    ) : (
      <Style.MoreItemContainer $showMore={showMore}>
        <Item item={item}></Item>
      </Style.MoreItemContainer>
    );
  }
};
