import Icon from '@/components/common/Icon';
import * as Style from './Estimate.style';
import { useState } from 'react';

interface EstimateProps {
  show: boolean;
  onClick: () => void;
}

const DEFAULT_PRICE = 46030000;

export default function Estimate({ show, onClick }: EstimateProps) {
  const [totalPrice, setTotalPrice] = useState<number>(DEFAULT_PRICE);
  return (
    <>
      <Style.EstimateContainer $show={show}>
        <Style.CloseContainer onClick={onClick}>
          <Icon icon="CloseIcon" />
        </Style.CloseContainer>
        <Style.TitleContainer>
          <Style.Title>견적 요약</Style.Title>
          <Style.TotalPrice>{totalPrice.toLocaleString()}원</Style.TotalPrice>
        </Style.TitleContainer>
        <Style.SectionContainer>
          <Style.Section>
            <Style.SectionTitleContainer>
              <Style.SectionTitle>팰리세이드 Le Blanc (르블랑)</Style.SectionTitle>
              <Style.Price>+ {DEFAULT_PRICE.toLocaleString()}원</Style.Price>
            </Style.SectionTitleContainer>
            <Style.SectionMainContainer>
              <Style.SectionMain>
                <Style.CategoryName>파워트레인</Style.CategoryName>
                <Style.SelectedContainer>
                  <Style.SelectedName>디젤 2.2</Style.SelectedName>
                  <Style.OptionPrice>+ 1480000원</Style.OptionPrice>
                </Style.SelectedContainer>
              </Style.SectionMain>
            </Style.SectionMainContainer>
          </Style.Section>
        </Style.SectionContainer>
      </Style.EstimateContainer>
    </>
  );
}
