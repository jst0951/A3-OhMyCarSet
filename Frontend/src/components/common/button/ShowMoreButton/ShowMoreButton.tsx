import Icon from '@/components/common/Icon';
import * as S from './ShowMoreButton.style';

interface ShowMoreProps {
  itemArrayLength: number;
  showLength: number;
  width: number;
  onClick: () => void;
}

export default function ShowMoreButton({ itemArrayLength, width, showLength, onClick }: ShowMoreProps) {
  if (itemArrayLength > showLength) {
    return (
      <S.MoreButtonContainer onClick={onClick} $width={width}>
        더보기
        <Icon icon="ArrowBottomIcon" size={20} />
      </S.MoreButtonContainer>
    );
  }
}
