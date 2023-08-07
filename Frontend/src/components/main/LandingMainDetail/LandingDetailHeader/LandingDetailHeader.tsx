import { useState, useEffect } from 'react';
import * as Style from './LandingDetailHeader.style';
import LandingDetailHeaderItem from '../LandingDetailHeaderItem/LandingDetailHeaderItem';

type TrimData = {
  id: number;
  name: string;
  description: string;
  defaultPrice: number;
  repColor: {
    name: string;
    colorCode: string;
    imgSrc: string;
  };
  best: boolean;
};

export interface DetailHeaderProps {
  trimData: TrimData;
}

export default function LandingDetailHeader({ trimData }: DetailHeaderProps) {
  return (
    <>
      <Style.MainHeaderContainer>
        <Style.MainHeaderTitle>모델 한 눈에 비교하기</Style.MainHeaderTitle>
        <Style.MainHeaderTrimContainer>
          {trimData && trimData.map((trim) => <LandingDetailHeaderItem key={trim.trimId} headerData={trim} />)}
        </Style.MainHeaderTrimContainer>
      </Style.MainHeaderContainer>
    </>
  );
}
