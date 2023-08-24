import { colors } from '@/style/theme';
import { bodyRegular2, headMedium2, headRegular3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(2px);

  z-index: 999;
`;

export const Container = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: 60px 90px;

  border-radius: 6px;
  background-color: ${colors.coolGreyBlack};
  /* opacity: 0.9; */
  backdrop-filter: blur(2px);

  & > img {
    width: 600px;
    height: 428px;
    border-radius: 6px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${colors.hyundaiWhite};
  ${headMedium2}
  font-size: 20px;
  white-space: pre;
`;

export const Text = styled.div`
  & > span {
    font-size: 20px;
    ${headRegular3}
  }
`;

export const Description = styled.div`
  margin: 10px 0 20px;
  color: ${colors.coolGrey001};
  ${bodyRegular2}

  & > span {
    color: ${colors.iconYellow};
  }
`;
