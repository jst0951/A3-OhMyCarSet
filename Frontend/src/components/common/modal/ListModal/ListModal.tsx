import Icon from '@/components/common/Icon';
import * as S from './ListModal.style';
import { IconType } from '@/components/common/Icon';
import { colors } from '@/style/theme';

interface ListModalProps {
  icon: IconType;
  mode: string;
}

export default function ListModal({ icon, mode }: ListModalProps) {
  return (
    <S.ModalContainer>
      <Icon icon={icon} size={36} />
      <S.TitleContainer>내 차 만들기 방식 변경하기</S.TitleContainer>
      <S.SelfMode>
        <S.SelfRight>
          <S.SelfHeader>
            <S.SelfTitle>셀프 모드</S.SelfTitle>
            {mode === 'self' && <S.SelfProcessing>현재 진행중</S.SelfProcessing>}
          </S.SelfHeader>
          <S.SelfText>
            가장 일반적으로 많은 사람들이 선택한 <br />
            인기있는 옵션들을 보며 내 취향에 맞게 자유롭게 <br />
            옵션을 선택할 수 있어요.
          </S.SelfText>
        </S.SelfRight>
        <S.SelfLeft>
          <Icon icon="ArrowRightIcon"></Icon>
        </S.SelfLeft>
      </S.SelfMode>
      <S.GuideMode>
        <S.GuideRight>
          <S.GuideHeader>
            <S.GuideTitle>가이드 모드</S.GuideTitle>
            {mode === 'guide' && <S.GuideProcessing>현재 진행중</S.GuideProcessing>}
          </S.GuideHeader>
          <S.GuideText>
            내 상황과 성향에 맞는 옵션들을 추천받아
            <br />
            나에게 딱 맞는 옵션들로 구성된 차량 견적을
            <br />
            받아볼 수 있어요.
          </S.GuideText>
        </S.GuideRight>
        <S.GuideLeft>
          <Icon icon="ArrowRightIcon" color={colors.hyundaiWhite}></Icon>
        </S.GuideLeft>
      </S.GuideMode>
    </S.ModalContainer>
  );
}
