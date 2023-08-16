import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const OptionImageContainer = styled.div`
  position: absolute;
  top: 23px;
  right: 20px;
`;

export const Exterior = styled.div<{ $icon: string }>`
  width: 60px;
  height: 60px;
  margin-top: 22px;
  border-radius: 50%;
  border: 1px solid ${colors.coolGrey002};
  background-image: url(${(props) => props.$icon});
  background-size: cover;
`;

export const Interior = styled.div<{ $icon: string }>`
  width: 150px;
  height: 50px;
  margin-top: 22px;
  border-radius: 2px;
  background-image: url(${(props) => props.$icon});
  background-size: cover;
`;

export const Wheel = styled.div<{ $icon: string }>`
  width: 90px;
  height: 16.8px;
  background-image: url(${(props) => props.$icon});
  background-size: cover;
`;
