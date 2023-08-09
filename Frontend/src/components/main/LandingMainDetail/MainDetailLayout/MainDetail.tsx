import { fetchData } from '@/apis/fetchData';
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

  const eventhandler = () => {
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
        <Style.coreOptionContainer>
          {coreOption.length > 0 && <Core coreOption={coreOption} />}
        </Style.coreOptionContainer>
        <Style.exteriorColorContainer>
          {exteriorColor.length > 0 && <ExteriorColor exteriorColor={exteriorColor} />}
        </Style.exteriorColorContainer>
        <Style.interiorColorContainer>
          {interiorColor.length > 0 && <InteriorColor interiorColor={interiorColor} />}
        </Style.interiorColorContainer>
        <Style.defaultOptionContainer>
          {defaultOption.length > 0 && <DefaultOption defaultOption={defaultOption} />}
        </Style.defaultOptionContainer>
        <Style.SelfButtonContainer>
          <RectButton onClick={eventhandler} type="recommended" page="main">
            내 차 만들기
          </RectButton>
          <RectButton onClick={eventhandler} type="recommended" page="main">
            내 차 만들기
          </RectButton>
          <RectButton onClick={eventhandler} type="recommended" page="main">
            내 차 만들기
          </RectButton>
          <RectButton onClick={eventhandler} type="recommended" page="main">
            내 차 만들기
          </RectButton>
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
