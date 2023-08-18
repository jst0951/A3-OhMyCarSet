import { colors } from '@/style/theme';
import { bodyRegular1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const LoadingStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoadingStep = styled.div<{ $idx: number }>`
  display: flex;
  gap: 12px;
  ${bodyRegular1}
  color: #6e809d;

  & path {
    animation: draw 0.4s ease-in-out forwards;
    animation-delay: ${({ $idx }) => `${$idx}s`};
  }

  color: ${({ $idx }) => ($idx === 0 ? `#6594CE` : $idx === 1 ? `#39629D` : `${colors.mainHyundaiBlue}`)};

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
    from {
      stroke-dashoffset: 18;
    }
  }
`;

export const StepText = styled.div<{ $idx: number }>`
  color: #9d9fa3;

  animation: active-color 0.4s ease-in-out forwards;
  animation-delay: ${({ $idx }) => `${$idx}s`};

  @keyframes active-color {
    to {
      color: ${colors.mainHyundaiBlue};
    }
    from {
      color: #9d9fa3;
    }
  }
`;
