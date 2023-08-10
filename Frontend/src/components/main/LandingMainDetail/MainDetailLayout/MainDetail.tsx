import * as Style from './MainDetail.style';
import RectButton from '@/components/common/button/RectButton/RectButton';
import Trim from './Trim/Trim';
import Core from './Core/Core';
import ExteriorColor from './ExteriorColor/ExteriorColor';
import InteriorColor from './InteriorColor/InteriorColor';
import DefaultOption from './DefaultOption/DefaultOption';
import Icon from '@/components/common/Icon';

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
      name: '핵심 옵션',
      component: <Core />,
    },
    {
      key: 'exterior',
      name: '외장 색상',
      component: <ExteriorColor />,
    },
    {
      key: 'interior',
      name: '내장 색상',
      component: <InteriorColor />,
    },
    {
      key: 'default',
      name: '기본 포함 품목',
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
          <Style.OptionContainer key={detail.key}>
            <Style.LineTitle>{detail.name}</Style.LineTitle>
            {detail.component}
          </Style.OptionContainer>
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
              <Style.GuideButtonText>
                Guide Mode
                <Icon icon="ArrowRightIcon" size={36} />
              </Style.GuideButtonText>
            </Style.GuideButtonLogoContainer>
          </Style.GuideButtonInside>
        </Style.GuideButtonContainer>
      </Style.Container>
    </>
  );
}
