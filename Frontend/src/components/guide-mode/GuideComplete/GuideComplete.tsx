import RectButton from '@/components/common/button/RectButton/RectButton';
import * as S from './GuideComplete.style';
import { useNavigate } from 'react-router-dom';
import { guideStepT } from '../GuideMain/GuideMain';
import { Dispatch, useEffect, useState } from 'react';
import { COMPLETE_URL, POWERTRAIN_URI } from '@/constants';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import Confetti from '@/components/common/Confetti/Confetti';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { SectionListT, myPalisadeProps } from '@/components/self-mode/SelfModeMain/OptionFooter/OptionFooter';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';

interface Props {
  setGuideStep: Dispatch<React.SetStateAction<guideStepT>>;
}

export default function GuideMainComplete({ setGuideStep }: Props) {
  const navigate = useNavigate();
  const { dataList } = useSelectOptionState();
  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();
  const { selectTag } = useSelectTagContext();
  const [hovered, setHovered] = useState(false);

  const linkToComplete = () => {
    navigate(COMPLETE_URL);
  };

  const handleClickGuideMode = () => {
    setGuideStep('GUIDE_MODE_URL');
  };

  const cachePowerTrain = async () => {
    const cache = await caches.open('powertrain');

    const response = await fetch(POWERTRAIN_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...selectTag,
        recommendOptionId: selectOptionState.dataList[0].recommendList,
      }),
    });

    if (response.ok) {
      await cache.put(POWERTRAIN_URI, response.clone());
    } else {
      console.error(`Failed to fetch response for ${POWERTRAIN_URI}`);
    }
  };

  const handleMouseEnter = () => {
    if (hovered) return;
    cachePowerTrain();
    setHovered(true);
  };

  const setSessionStorage = () => {
    const sectionList: SectionListT = {
      sectionTitle: '옵션',
      totalPrice: selectPackageState.totalPrice,
      subList: Array.from(selectPackageState.packageList).map((packageData) =>
        Array.from(packageData.selectedList.values())
      ),
    };

    const myPalisade: myPalisadeProps = {
      single: selectOptionState,
      multi: sectionList,
    };

    sessionStorage.setItem('myPalisade', JSON.stringify(myPalisade));
  };

  useEffect(() => {
    setSessionStorage();
  }, []);

  return (
    <S.MainContainer>
      <Confetti left={30} width={40} heigth={250} confettiNum={13} />
      <img
        src={`${import.meta.env.VITE_STATIC_API_URL}/${dataList[3].imgSrc}`}
        alt={dataList[3].selectedName || '팰리세이드'}
        height={300}
      />
      <S.MainTitle>나만의 팰리세이드 견적 준비 완료!</S.MainTitle>
      <S.SelectedTrim>
        <S.Selected>선택된 트림</S.Selected>
        <S.Trim>팰리세이드 Le Blanc (르블랑)</S.Trim>
      </S.SelectedTrim>
      <S.SubTitle>
        준비된 견적을 바로 확인하거나, <br />
        옵션을 차례로 살펴보며 변경할 수 있어요.
      </S.SubTitle>
      <S.ButtonLine>
        <RectButton type="recommended" page="ready" onClick={linkToComplete}>
          완성된 견적을 바로 볼게요
        </RectButton>
        <div onMouseEnter={handleMouseEnter}>
          <RectButton type="notrecommended" page="ready" onClick={handleClickGuideMode}>
            옵션을 하나씩 살펴볼래요
          </RectButton>
        </div>
      </S.ButtonLine>
    </S.MainContainer>
  );
}
