import { colors } from '@/style/theme';
import * as S from './LoadingCircle.style';
import Icon from '@/components/common/Icon';

const RADIUS = 170;
const ROUND = RADIUS * 2 * Math.PI;

export default function LoadingCircle() {
  return (
    <>
      <S.CircleContainer>
        <svg width="180" height="180" viewBox="0 0 360 360" fill="transparent" style={{ transform: 'rotate(-90deg)' }}>
          <circle stroke={colors.coolGrey002} cx="180" cy="180" r={RADIUS} strokeWidth="12" strokeDasharray={ROUND} />
          <S.ProgressCircle
            stroke={colors.mainHyundaiBlue}
            cx="180"
            cy="180"
            r={RADIUS}
            strokeWidth="14"
            strokeDasharray={ROUND}
            strokeDashoffset={ROUND}
            strokeLinecap="round"
          ></S.ProgressCircle>
        </svg>
        <S.LoadingIcon $fade={1}>
          <Icon icon="LoadingCarIcon" size={106} />
        </S.LoadingIcon>
        <S.LoadingIcon $fade={2}>
          <Icon icon="LoadingToolIcon" size={106} />
        </S.LoadingIcon>
      </S.CircleContainer>
    </>
  );
}
