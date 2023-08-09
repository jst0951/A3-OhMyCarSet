import { useState } from 'react';
import * as Style from './DefaultOption.style';
import RectFilterButton from '@/components/common/button/RectFilterButton/RectFilterButton';

type DefaultOption = {
  trimId: number;
  trimName: string;
  defaultOptionCategoryDtoList: Array<{
    categoryname: string;
    defaultOptionDetailDtoList: itemProps[];
  }>;
};

type itemProps = {
  optionId: number;
  optionName: string;
  imgSrc: string;
};

interface DefaultOptionProps {
  defaultOption: DefaultOption[];
}

const filterCategory = ['전체', '성능', '지능형 안전기술', '안전', '외관', '내장', '시트', '편의', '멀티미디어'];
const categoryNum = [0, 1, 2, 3, 4, 5, 6, 7];

export default function DefaultOption({ defaultOption }: DefaultOptionProps) {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [showMore, setShowMore] = useState('none');

  const eventhandler = () => {
    showMore === 'none' ? setShowMore('flex') : setShowMore('none');
  };

  console.log(defaultOption);

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
                setSelectedCategory(index - 1);
                setShowMore('none');
              }}
            >
              {category}
            </RectFilterButton>
          ))}
        </Style.ButtonLine>
        <Style.OptionContainer>
          {defaultOption.map((trim) => (
            <>
              <Style.ItemLine key={trim.trimId}>
                {selectedCategory === -1
                  ? categoryNum.map((cateNum) =>
                      trim.defaultOptionCategoryDtoList[cateNum].defaultOptionDetailDtoList.map(
                        (item: itemProps, index: number) =>
                          cateNum === 0 && index < 5 ? (
                            <>
                              <Style.ItemContainer>
                                <Style.Item>
                                  <img
                                    src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`}
                                    width={80}
                                    height={60}
                                  />
                                </Style.Item>
                                <Style.ItemDescription>{item.optionName}</Style.ItemDescription>
                              </Style.ItemContainer>
                            </>
                          ) : (
                            <>
                              <Style.MoreItemContainer showMore={showMore}>
                                <Style.Item>
                                  <img
                                    src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`}
                                    width={80}
                                    height={60}
                                  />
                                </Style.Item>
                                <Style.ItemDescription>{item.optionName}</Style.ItemDescription>
                              </Style.MoreItemContainer>
                            </>
                          )
                      )
                    )
                  : trim.defaultOptionCategoryDtoList[selectedCategory].defaultOptionDetailDtoList.map(
                      (item: itemProps, index: number) =>
                        index < 5 ? (
                          <>
                            <Style.ItemContainer>
                              <Style.Item>
                                <img
                                  src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`}
                                  width={80}
                                  height={60}
                                />
                              </Style.Item>
                              <Style.ItemDescription>{item.optionName}</Style.ItemDescription>
                            </Style.ItemContainer>
                          </>
                        ) : (
                          <>
                            <Style.MoreItemContainer showMore={showMore}>
                              <Style.Item>
                                <img
                                  src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`}
                                  width={80}
                                  height={60}
                                />
                              </Style.Item>
                              <Style.ItemDescription>{item.optionName}</Style.ItemDescription>
                            </Style.MoreItemContainer>
                          </>
                        )
                    )}
              </Style.ItemLine>
            </>
          ))}
        </Style.OptionContainer>
        <Style.MoreButtonContainer onClick={eventhandler}>더보기</Style.MoreButtonContainer>
      </Style.Container>
    </>
  );
}
