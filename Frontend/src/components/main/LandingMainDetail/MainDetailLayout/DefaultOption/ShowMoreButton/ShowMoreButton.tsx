import Icon from '@/components/common/Icon';
import * as S from './ShowMoreButton.style';

interface ShowMoreProps {
  itemArrayLength: number;
  showLength: number;
  onClick: () => void;
}

export default function ShowMoreButton({ itemArrayLength, showLength, onClick }: ShowMoreProps) {
  if (itemArrayLength > showLength) {
    return (
      <S.MoreButtonContainer onClick={onClick}>
        더보기
        <Icon icon="ArrowBottomIcon" size={20} />
      </S.MoreButtonContainer>
    );
  }
}
