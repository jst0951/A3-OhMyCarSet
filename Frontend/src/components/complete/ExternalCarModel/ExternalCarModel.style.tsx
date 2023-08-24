import { styled, css } from 'styled-components';

export const MainContainer = styled.div`
  z-index: 10;

  cursor: pointer;
`;

export const CarImgContainer = styled.div<{ $isDisplay: boolean }>`
  width: 589px;
  height: 326px;
  margin: 20px;
  z-index: 10;

  ${({ $isDisplay }) =>
    $isDisplay
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
