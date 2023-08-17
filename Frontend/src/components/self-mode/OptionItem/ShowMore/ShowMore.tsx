import { RefObject } from 'react';
import * as S from './ShowMore.style';
import HighlightWord from '@/utils/HighlightWord';

interface ShowMoreProps {
  contentBoxRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  description: {
    main?: string;
    sub?: string;
  };
  showMore: boolean;
}

export default function ShowMore({ contentBoxRef, contentRef, description, showMore }: ShowMoreProps) {
  return (
    <>
      <S.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
        <S.ShowMoreContainer ref={contentRef}>
          {description.main && <S.ShowMoreMainText>{description.main}</S.ShowMoreMainText>}
          {description.sub && <S.ShowMoreSubText>{HighlightWord({ children: description.sub })}</S.ShowMoreSubText>}
        </S.ShowMoreContainer>
      </S.ShowMoreWrapper>
    </>
  );
}
