import { colors } from '@/style/theme';
import { bodyMedium3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ShowMoreButton = styled.div<{ $isActive: boolean; $showMore: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  /* z-index: 1; */

  ${bodyMedium3}
  color: ${colors.coolGrey003};

  cursor: pointer;

  & > svg {
    transition: 0.2s ease-in-out;

    ${({ $showMore }) =>
      $showMore &&
      `
      transform: scaleY(-1);
  `}
  }

  ${({ $isActive }) => !$isActive && `pointer-events: none`}
`;
