import { RefObject, useEffect, useState } from 'react';
import * as S from './ShowMoreMulti.style';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';

interface ShowMoreProps {
  contentBoxRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  optionId: number;
  optionList: Array<{
    name: string | null;
    description: string;
  }>;
  showMore: boolean;
}

export default function ShowMoreMulti({ contentBoxRef, contentRef, optionId, optionList, showMore }: ShowMoreProps) {
  const [selectedId, setSelectedId] = useState<number>(1);
  const currentPackageDispatch = useCurrentPackageDispatch();

  const handleClick = (idx: number, event: React.MouseEvent) => {
    event.stopPropagation();
    currentPackageDispatch({
      type: 'UPDATE_PACKAGE',
      payload: optionId,
    });
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: idx,
    });
    setSelectedId(idx);
  };

  useEffect(() => {
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: 1,
    });
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
