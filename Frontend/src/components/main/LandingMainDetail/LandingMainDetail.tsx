import Header from './Header/Header';
import Main from './MainDetailLayout/MainDetail';
import { useState, useEffect } from 'react';
import * as S from './LandingMainDetail.style';
import fetchData from '@/apis/fetchData';

type HeaderData = {
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

export default function LandingMainDetail() {
  const [detailHeaderData, setLandingHeaderData] = useState<HeaderData[]>([]);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const detailHeaderTrim = await fetchData('trim');
        setLandingHeaderData(detailHeaderTrim);
      } catch (error) {
        console.error('Error fetching core option data:', error);
      }
    }
    fetchHeaderData();
  }, []);

  return (
    <>
      <S.Container>
        <Header trimData={detailHeaderData} />
        <Main trimData={detailHeaderData} />
      </S.Container>
    </>
  );
}
