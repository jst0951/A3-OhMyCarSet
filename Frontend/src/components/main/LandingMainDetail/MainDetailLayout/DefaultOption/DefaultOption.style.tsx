import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLine = styled.div`
  display: flex;
  width: 772px;
  align-items: flex-start;
  margin-top: 30px;
  gap: 8px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px 0 52px;
`;

export const ItemLine = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 256px;
  padding-left: 24px;
  gap: 6px;
`;

export const ItemContainer = styled.div<{ $showMore: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  ${({ $showMore }) => ($showMore ? `display: flex` : `display: none`)}
`;

export const MoreItemContainer = styled.div<{ $showMore: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  ${({ $showMore }) => ($showMore ? `display: flex` : `display: none`)}
`;
