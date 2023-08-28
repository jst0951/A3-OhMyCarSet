import { colors } from '@/style/theme';
import { css, styled } from 'styled-components';

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 33px;
`;

export const Indicator = styled.div<{ $active: boolean; $disable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 33px;

  border-radius: 50%;

  color: ${colors.hyundaiWhite};
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.8px;

  ${({ $disable }) => !$disable && `  cursor: pointer;`}

  ${({ $active, $disable }) =>
    $active
      ? css`
          background-color: ${colors.mainHyundaiBlue};
          transition: all 0.2s ease;
        `
      : $disable
      ? css`
          background-color: #dfdfdf;
          transition: all 0.2s ease;
        `
      : css`
          background-color: #dfdfdf;
          transition: all 0.2s ease;

          &:hover {
            background-color: #6594ce;
          }
        `}
`;
