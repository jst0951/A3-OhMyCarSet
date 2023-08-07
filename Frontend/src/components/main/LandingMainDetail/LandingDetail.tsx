import LandingDetailHeader from './LandingDetailHeader/LandingDetailHeader';
import LandingMainDetail from './LandingMainDetail/LandingMainDetail';
import { useState, useEffect } from 'react';
import { getDetailData } from '@/apis/landing/getDetailData';

export default function LandingDetail() {
  const [detailHeaderData, setLandingHeaderData] = useState([]);

  useEffect(() => {
    getDetailData('trim').then((data) => {
      setLandingHeaderData(data);
    });
  }, []);

  return (
    <>
      <LandingDetailHeader trimData={detailHeaderData} />
      <LandingMainDetail trimData={detailHeaderData} />
    </>
  );
}
