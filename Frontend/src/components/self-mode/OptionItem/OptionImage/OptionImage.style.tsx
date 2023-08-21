import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const OptionImageContainer = styled.div`
  position: absolute;
  top: 23px;
  right: 20px;
`;

export const Exterior = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 22px;
  border-radius: 50%;
  border: 1px solid ${colors.coolGrey002};
  object-fit: cover;
`;

export const Interior = styled.img`
  width: 150px;
  height: 50px;
  margin-top: 22px;
  border-radius: 2px;
  object-fit: cover;
`;

export const Wheel = styled.img`
  width: 90px;
  height: 16.8px;
  object-fit: cover;
`;

export const Package = styled.img`
  width: 71.11px;
  height: 16px;
  margin-top: 1px;
  object-fit: cover;
`;
