import * as S from './GuideMainTag.style';
import GuideIndicator from '@/components/guide-mode/GuideIntro/GuideIndicator/GuideIndicator';
import GuideSingleTag from '@/components/guide-mode/GuideIntro/GuideMainTag/GuideSingleTag/GuideSingleTag';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideMultiTag from '@/components/guide-mode/GuideIntro/GuideMainTag/GuideMultiTag/GuideMultiTag';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { Dispatch, useEffect, useState } from 'react';
import { GUIDE_MAX_STEP, PACKAGE_END_INDEX, PACKAGE_START_INDEX, optionKeyArr } from '@/constants';
import { guideStepT } from '../../GuideMain/GuideMain';
import fetchPost from '@/utils/apis/fetchPost';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { OptionPackageT } from '@/components/self-mode/SelfModeMain/SelfModeMain';
import { deletePowertrainCache } from '@/utils/cache/deletePowertrainCache';

interface MainProps {
  setGuideStep: Dispatch<React.SetStateAction<guideStepT>>;
}

export default function GuideMainTag({ setGuideStep }: MainProps) {
  const [guideModeStep, setGuideModeStep] = useState(1);
  const [showButton, setShowButton] = useState<boolean>(false);
  const { selectTag } = useSelectTagContext();

  const SelectOptionDispatch = useSelectOptionDispatch();
  const SelectPackageDispatch = useSelectPackageDispatch();

  const fetchRecommend = async () => {
    try {
      const response = await fetchPost('recommend', selectTag);

      for (let idx = 0; idx < PACKAGE_START_INDEX; idx++) {
        const data = response[optionKeyArr[idx]];

        SelectOptionDispatch({
          type: 'UPDATE_LIST',
          payload: {
            optionId: idx + 1,
            newOptionData: {
              selectedId: data.id,
              selectedName: data.name,
              price: data.price,
              imgSrc: data.imgSrc,
              recommendList: [data.id],
            },
          },
        });
      }
      for (let idx = PACKAGE_START_INDEX; idx < PACKAGE_END_INDEX + 1; idx++) {
        const key = optionKeyArr[idx];

        if (response[key].length === 0) continue;

        for (let option = 0; option < response[key].length; option++) {
          const data: OptionPackageT = response[key][option];

          SelectPackageDispatch({
            type: 'UPDATE_LIST',
            payload: {
              filterId: idx - 5,
              newData: {
                id: data.id,
                name: data.name,
                price: data.price,
                imgSrc: data.components[0].imgSrc,
              },
              recommendId: data.id,
            },
          });
        }
      }
    } catch (error) {
      console.error('Error fetching recommend data:', error);
    }
  };

  const clickHandler = async () => {
    SelectPackageDispatch({ type: 'INIT_LIST' });
    await fetchRecommend();

    setGuideStep('LOADING');
  };

  useEffect(() => {
    if (guideModeStep === 1) deletePowertrainCache();
  }, [guideModeStep]);

  useEffect(() => {
    setGuideModeStep(1);
  }, []);

  return (
    <>
      <S.MainContainer>
        <S.MainLeftContainer>
          <GuideIndicator guideModeStep={guideModeStep} />
          <S.DescriptionContainer>
            {guideDescriptionData.map((data) => (
              <S.Description key={data.page} $hidden={data.page !== guideModeStep}>
                <S.MainDescription>{data.mainDescription}</S.MainDescription>
                <S.MainDescriptionBold>{data.mainDescriptionBold}</S.MainDescriptionBold>
                <S.SubDescription>{data.subDescription}</S.SubDescription>
              </S.Description>
            ))}
          </S.DescriptionContainer>
          <S.ButtonContainer $hidden={!showButton || guideModeStep !== GUIDE_MAX_STEP}>
            <RectButton type="recommended" page="guide" onClick={clickHandler}>
              선택 완료
            </RectButton>
          </S.ButtonContainer>
        </S.MainLeftContainer>
        <S.MainRightContainer>
          <GuideSingleTag step={1} show={guideModeStep === 1} setGuideModeStep={setGuideModeStep} />
          <GuideSingleTag step={2} show={guideModeStep === 2} setGuideModeStep={setGuideModeStep} />
          <GuideMultiTag setShowButton={setShowButton} show={guideModeStep === GUIDE_MAX_STEP} />
        </S.MainRightContainer>
      </S.MainContainer>
    </>
  );
}
