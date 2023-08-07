import { getDetailData, getStaticData } from '@/apis/landing/getDetailData';
import { useEffect, useState } from 'react';
import * as Style from './LandingMainDetail.style';
import LandingMainDetailTrim from './LandingMainDetailTrim/LandingMainDetailTrim';
import LandingMainDetailCore from './LandingMainDetailCore/LandingMainDetailCore';

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

export default function LandingDetailMain({ trimData }: DetailHeaderProps) {
  const [coreOption, setCoreOption] = useState([]);
  const [exteriorColor, setExteriorColor] = useState([]);
  const [interiorColor, setInteriorColor] = useState([]);

  useEffect(() => {
    getDetailData('core_option').then((data) => {
      setCoreOption(data);
    });
    getDetailData('exterior_color').then((data) => {
      setExteriorColor(data);
    });
    getDetailData('interior_color').then((data) => {
      setInteriorColor(data);
    });
  }, []);

  return (
    <>
      <Style.MainDetailContainer>
        <Style.MainDetailTrim>
          {trimData.map((trim) => (
            <LandingMainDetailTrim key={trim.id} trimData={trim} />
          ))}
        </Style.MainDetailTrim>
        <Style.MainDetailOptionContainer>
          <LandingMainDetailCore coreOption={coreOption} />
        </Style.MainDetailOptionContainer>
      </Style.MainDetailContainer>
    </>
  );
}
