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
  const mainDetailList = [
    {
      key: 'core',
      component: <Core />,
    },
    {
      key: 'exterior',
      component: <ExteriorColor />,
    },
    {
      key: 'interior',
      component: <InteriorColor />,
    },
    {
      key: 'default',
      component: <DefaultOption />,
    },
  ];

  const eventHandler = () => {
    window.location.href = '/self-mode';
  };

  return (
    <>
      <Style.Container>
        <Style.Trim>
          {trimData.map((trim) => (
            <Trim key={trim.id} trimData={trim} />
          ))}
        </Style.Trim>

        {mainDetailList.map((detail) => (
          <Style.OptionContainer key={detail.key}>{detail.component}</Style.OptionContainer>
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
