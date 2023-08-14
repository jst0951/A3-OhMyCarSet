import { RefObject, useEffect, useState } from 'react';
import * as S from './ShowMoreMulti.style';

interface ShowMoreProps {
  contentBoxRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  optionList: Array<{
    name: string;
    description: string;
  }>;
  showMore: boolean;
}

export default function ShowMoreMulti({ contentBoxRef, contentRef, optionList, showMore }: ShowMoreProps) {
  const [selectedId, setSelectedId] = useState<number>(1);

  const handleClick = (idx: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedId(idx);
  };

  useEffect(() => {
    setSelectedId(1);
  }, [optionList]);

  return (
    <>
      <S.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
        <S.ShowMoreContainer ref={contentRef}>
          <S.NameContainer>
            {optionList.map((option, idx) => (
              <S.ShowMoreMainText key={option.name}>
                <S.Name onClick={(e) => handleClick(idx + 1, e)} $selected={selectedId === idx + 1}>
                  {option.name}
                </S.Name>
                {idx !== optionList.length - 1 && 'ㆍ'}
              </S.ShowMoreMainText>
            ))}
          </S.NameContainer>
          <S.ShowMoreSubText>{optionList[selectedId - 1]?.description}</S.ShowMoreSubText>
        </S.ShowMoreContainer>
      </S.ShowMoreWrapper>
    </>
  );
}
