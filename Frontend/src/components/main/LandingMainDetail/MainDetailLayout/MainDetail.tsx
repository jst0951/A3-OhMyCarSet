import fetchData from '@/apis/fetchData';
import { useEffect, useState } from 'react';
import * as Style from './MainDetail.style';
import RectButton from '@/components/common/button/RectButton/RectButton';
import Trim from './Trim/Trim';
import Core from './Core/Core';
import ExteriorColor from './ExteriorColor/ExteriorColor';
import InteriorColor from './InteriorColor/InteriorColor';
import DefaultOption from './DefaultOption/DefaultOption';

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

interface DetailHeaderProps {
  trimData: TrimData[];
}

export default function MainDetail({ trimData }: DetailHeaderProps) {
  const [coreOption, setCoreOption] = useState([]);
  const [exteriorColor, setExteriorColor] = useState([]);
  const [interiorColor, setInteriorColor] = useState([]);
  const [defaultOption, setDefaultOption] = useState([]);

  const mainDetailList = [
    {
      data: coreOption,
      component: <Core coreOption={coreOption} />,
    },
    {
      data: exteriorColor,
      component: <ExteriorColor exteriorColor={exteriorColor} />,
    },
    {
      data: interiorColor,
      component: <InteriorColor interiorColor={interiorColor} />,
    },
    {
      data: defaultOption,
      component: <DefaultOption defaultOption={defaultOption} />,
    },
  ];

  const eventHandler = () => {
    window.location.href = '/self-mode';
  };

  useEffect(() => {
    async function fetchCoreOption() {
      try {
        const coreOptionData = await fetchData('core_option');
        setCoreOption(coreOptionData);
      } catch (error) {
        console.error('Error fetching core option data:', error);
      }
    }
    async function fetchExteriorColor() {
      try {
        const exteriorColorData = await fetchData('exterior_color');
        setExteriorColor(exteriorColorData);
      } catch (error) {
        console.error('Error fetching core option data:', error);
      }
    }
    async function fetchInteriorColor() {
      try {
        const interiorColorData = await fetchData('interior_color');
        setInteriorColor(interiorColorData);
      } catch (error) {
        console.error('Error fetching core option data:', error);
      }
    }
    async function fetchSetDefaultOption() {
      try {
        const defaultOpion = await fetchData('default_option');
        setDefaultOption(defaultOpion);
      } catch (error) {
        console.error('Error fetching core option data:', error);
      }
    }
    fetchCoreOption();
    fetchExteriorColor();
    fetchInteriorColor();
    fetchSetDefaultOption();
  }, []);

  return (
    <>
      <Style.Container>
        <Style.Trim>
          {trimData.map((trim) => (
            <Trim key={trim.id} trimData={trim} />
          ))}
        </Style.Trim>

        {mainDetailList.map((detail, idx) => (
          <Style.OptionContainer key={idx}>{detail.data.length > 0 && detail.component}</Style.OptionContainer>
        ))}
        <Style.SelfButtonContainer>
          {trimData.map((trim) => (
            <RectButton key={trim.id} onClick={eventHandler} type="recommended" page="main">
              내 차 만들기
            </RectButton>
          ))}
        </Style.SelfButtonContainer>
        <Style.GuideButtonContainer>
          <Style.GuideButtonInside>
            <Style.GuideButtonExplain>무엇을 골라야 할 지 모르겠다면?</Style.GuideButtonExplain>
            <Style.GuideButtonLogoContainer>
              <Style.GuideButtonText>Guide Mode</Style.GuideButtonText>
              <Style.GuideButtonSVG></Style.GuideButtonSVG>
            </Style.GuideButtonLogoContainer>
          </Style.GuideButtonInside>
        </Style.GuideButtonContainer>
      </Style.Container>
    </>
  );
}
