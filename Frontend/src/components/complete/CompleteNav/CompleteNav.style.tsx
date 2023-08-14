import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { headMedium5, headRegular5 } from '@/style/typefaces';

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  height: 26px;
  margin: 0 auto;

  ${headRegular5}
  color: ${colors.coolGrey002};
  text-align: center;
`;

export const NavCategoryContainer = styled.div<{ $active: boolean }>`
  width: 120px;
  padding-top: 2px;

  cursor: pointer;

  ${({ $active }) =>
    $active &&
    `${headMedium5}
    color: ${colors.mainHyundaiBlue};
  `}
`;

export const CategoryActiveBorder = styled.div<{ $activeCategory: number }>`
  position: absolute;
  left: ${({ $activeCategory }) => `${($activeCategory - 1) * 120}px`};
  bottom: 0;

  display: flex;
  justify-content: center;
  text-align: center;

  width: 120px;
  height: 2px;

  background-color: ${colors.mainHyundaiBlue};

  transition: 0.4s ease-in-out;

  z-index: 1;
`;

export const NavBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 2px;
  background-color: ${colors.coolGrey002};
`;
