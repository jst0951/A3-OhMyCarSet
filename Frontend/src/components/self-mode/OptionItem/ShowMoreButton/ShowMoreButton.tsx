import Icon from '@/components/common/Icon';
import * as S from './ShowMoreButton.style';
import { MouseEventHandler } from 'react';

interface Props {
  isActive: boolean;
  showMore: boolean;
  onClick: MouseEventHandler;
}

export default function ShowMoreButton({ isActive, showMore, onClick }: Props) {
  return (
    <>
      <S.ShowMoreButton $isActive={isActive} $showMore={showMore} onClick={onClick}>
        {showMore ? '접기' : '자세히 보기'}
        <Icon icon="OptionShowMoreIcon" size={14} />
      </S.ShowMoreButton>
    </>
  );
}
