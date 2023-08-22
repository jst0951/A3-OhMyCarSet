import RectButton from '@/components/common/button/RectButton/RectButton';
import * as S from './GuideComplete.style';
import { useNavigate } from 'react-router-dom';
import { guideStepT } from '../GuideMain/GuideMain';
import { Dispatch, useEffect } from 'react';
import { COMPLETE_URL } from '@/constants';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { SectionListT, myPalisadeProps } from '@/components/self-mode/SelfModeMain/OptionFooter/OptionFooter';

interface Props {
  setGuideStep: Dispatch<React.SetStateAction<guideStepT>>;
}

export default function GuideMainComplete({ setGuideStep }: Props) {
  const navigate = useNavigate();
  const { dataList } = useSelectOptionState();
  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();

  const linkToComplete = () => {
    navigate(COMPLETE_URL);
  };

  const handleClickGuideMode = () => {
    setGuideStep('GUIDE_MODE_URL');
  };

  const setSessionStorage = () => {
    console.log(selectPackageState.packageList);
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
        <RectButton type="notrecommended" page="ready" onClick={handleClickGuideMode}>
          옵션을 하나씩 살펴볼래요
        </RectButton>
      </S.ButtonLine>
    </S.MainContainer>
  );
}
