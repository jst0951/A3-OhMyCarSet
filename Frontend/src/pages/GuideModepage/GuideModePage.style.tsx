import { styled } from 'styled-components';

export const GuideModeContainer = styled.div<{ $block: boolean }>`
  margin-top: 85px;

  ${({ $block }) => $block && `  pointer-events: none;`}
`;
