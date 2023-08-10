import Icon from '@/components/common/Icon';
import * as S from './FeedbackItem.style';

export default function FeedbackItem() {
  return (
    <>
      <S.FeedbackContainer>
        <Icon icon="SmileBeforeIcon" />
        <S.Title>디젤 엔진은 효율이 좋아요!</S.Title>
        <S.Description>
          알콘(alcon) 단조 브레이크 & 20인치 휠 패키지는 뛰어난 제동력이 강점이에요! 안전과 디자인을 모두 원하신다면,
          탁월한 선택입니다.
        </S.Description>
      </S.FeedbackContainer>
    </>
  );
}
