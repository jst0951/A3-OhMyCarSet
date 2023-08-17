import { RefObject, useEffect, useState } from 'react';
import * as S from './ShowMoreMulti.style';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import HighlightWord from '@/utils/HighlightWord';

interface ShowMoreProps {
  contentBoxRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  optionId: number;
  optionList: Array<{
    id: number;
    name: string | null;
    description: string;
  }>;
  showMore: boolean;
}

export default function ShowMoreMulti({ contentBoxRef, contentRef, optionId, optionList, showMore }: ShowMoreProps) {
  const [selectedId, setSelectedId] = useState<number>(0);
  const currentPackageDispatch = useCurrentPackageDispatch();

  const handleClick = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    currentPackageDispatch({
      type: 'UPDATE_PACKAGE',
      payload: optionId,
    });
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: id,
    });
    setSelectedId(id);
  };

  useEffect(() => {
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: optionList[0].id,
    });
    setSelectedId(optionList[0].id);
  }, [optionList]);

  return (
    <>
      <S.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
        <S.ShowMoreContainer ref={contentRef}>
          <S.NameContainer>
            {optionList.map((option, idx) => (
              <S.ShowMoreMainText key={option.name}>
                <S.Name onClick={(e) => handleClick(option.id, e)} $selected={selectedId === option.id}>
                  {option.name}
                </S.Name>
                {idx !== optionList.length - 1 && 'ㆍ'}
              </S.ShowMoreMainText>
            ))}
          </S.NameContainer>
          {
            <S.ShowMoreSubText>
              {HighlightWord({ children: optionList.find((option) => option.id === selectedId)?.description })}
            </S.ShowMoreSubText>
          }
        </S.ShowMoreContainer>
      </S.ShowMoreWrapper>
    </>
  );
}
