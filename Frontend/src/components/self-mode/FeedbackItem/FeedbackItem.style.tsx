import { colors } from '@/style/theme';
import { bodyRegular3, headMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const FeedbackContainer = styled.div<{ $show: boolean }>`
  position: relative;
  width: 375px;
  min-height: 155px;
  padding: 20px;

  color: ${colors.hyundaiWhite};

  border-radius: 6px;
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.mainHyundaiBlue};

  & > svg {
    ${({ $show }) =>
      $show &&
      `opacity: 0;
      transition: opacity 0.1s linear;
  `}
  }
`;

export const NextIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

export const SecondIcon = styled.div<{ $show: boolean }>`
  position: relative;
  width: 30px;
  height: 30px;

  & > svg {
    position: absolute;
    bottom: 4px;

    transform: scale(0);
    ${({ $show }) =>
      $show &&
      `opacity: 1;
      transform: scale( 1 );
      transform-origin: 0% 50%;
      transition: opacity 0.3s linear, transform 0.3s linear;
      `}
  }
`;

export const Title = styled.div`
  margin: 14px 0 8px;
  ${headMedium2}
  color: ${colors.hyundaiWhite};
`;

export const Description = styled.div`
  ${bodyRegular3}
  color: ${colors.hyundaiWhite};
  line-height: 16px;
  word-break: keep-all;
`;
