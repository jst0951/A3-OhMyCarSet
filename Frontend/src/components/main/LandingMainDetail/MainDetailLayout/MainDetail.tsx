import * as S from './MainDetail.style';
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

  const handleClickMyCar = (name: string) => {
    if (name === 'Le Blanc (르블랑)') window.location.href = '/self-mode';
  };

  const handleClickGuide = () => {
    window.location.href = '/self-mode';
  };

  return (
    <>
      <S.Container>
        <S.Trim>
          {trimData.map((trim) => (
            <Trim key={trim.id} trimData={trim} />
          ))}
        </S.Trim>

        {mainDetailList.map((detail) => (
          <S.OptionContainer key={detail.key}>
            <S.LineTitle>{detail.name}</S.LineTitle>
            {detail.component}
          </S.OptionContainer>
        ))}
        <S.SelfButtonContainer>
          {trimData.map((trim) => (
            <RectButton key={trim.id} onClick={() => handleClickMyCar(trim.name)} type="recommended" page="main">
              내 차 만들기
            </RectButton>
          ))}
        </S.SelfButtonContainer>
        <S.GuideButtonContainer onClick={handleClickGuide}>
          <S.GuideButtonInside>
            <S.GuideButtonExplain>무엇을 골라야 할 지 모르겠다면?</S.GuideButtonExplain>
            <S.GuideButtonLogoContainer>
              <S.GuideButtonText>
                Guide Mode
                <Icon icon="ArrowRightIcon" size={36} />
              </S.GuideButtonText>
            </S.GuideButtonLogoContainer>
          </S.GuideButtonInside>
        </S.GuideButtonContainer>
      </S.Container>
    </>
  );
}
