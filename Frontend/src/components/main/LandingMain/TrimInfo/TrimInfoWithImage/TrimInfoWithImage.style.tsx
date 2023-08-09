import { headRegular5, headRegular6 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TrimInfoWithImageContainer = styled.div``;

export const TrimInfoTitle = styled.div`
  margin: 16px 0;
  ${headRegular5}
  line-height: 15px;
  letter-spacing: -0.56px;
  text-shadow: 0px 2px 12px rgba(44, 44, 44, 0.3);
`;

export const TrimInfoContainer = styled.div`
  display: flex;
  margin-left: -32px;
`;

export const TrimOptionImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 30px;
  filter: drop-shadow(0px 0px 8px rgba(44, 44, 44, 0.5));
`;

export const TrimOptionText = styled.div`
  ${headRegular6}
  font-weight: 400;
  white-space: pre-line;
  text-align: center;
  text-shadow: 0px 0px 8px rgba(44, 44, 44, 0.3);
`;

export const TrimOptionBorder = styled.div`
  position: absolute;
  bottom: 29px;
  right: 0;
  width: 1px;
  height: 22px;
  background-color: white;
`;

export const TrimCoreOption = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child ${TrimOptionBorder} {
    display: none;
  }
`;
