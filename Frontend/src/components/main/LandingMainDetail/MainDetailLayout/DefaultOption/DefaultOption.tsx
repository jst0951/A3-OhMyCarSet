import { useState } from 'react';
import * as Style from './DefaultOption.style';
import RectFilterButton from '@/components/common/button/RectFilterButton/RectFilterButton';
import Item from './Item/Item';
import Icon from '@/components/common/Icon';

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

const MAX_ITEM_NUM = 5;
const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];

function ItemContianer(item: ItemProps, showMore: string, index?: number) {
  if (index === undefined) {
    return (
      <Style.ItemContainer $more={item.optionId <= MAX_ITEM_NUM} $showMore={showMore}>
        <Item item={item}></Item>
      </Style.ItemContainer>
    );
  } else {
    return (
      <Style.ItemContainer $more={index < MAX_ITEM_NUM} $showMore={showMore}>
        <Item item={item}></Item>
      </Style.ItemContainer>
    );
  }
}

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
                      <>{ItemContianer(item, showMore)}</>
                    ))
                  )
                : trim.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                    (item: ItemProps, optionIndex: number) => <>{ItemContianer(item, showMore, optionIndex)}</>
                  )}
            </Style.ItemLine>
          ))}
        </Style.OptionContainer>
        {selectedCategory === -1 ? (
          <Style.MoreButtonContainer onClick={moreEventHandler}>
            더보기
            <Icon icon="ArrowBottomIcon" size={20} />
          </Style.MoreButtonContainer>
        ) : (
          defaultOption[0].defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.length >
            MAX_ITEM_NUM && (
            <Style.MoreButtonContainer onClick={moreEventHandler}>
              더보기
              <Icon icon="ArrowBottomIcon" size={20} />
            </Style.MoreButtonContainer>
          )
        )}
      </Style.Container>
    </>
  );
}
