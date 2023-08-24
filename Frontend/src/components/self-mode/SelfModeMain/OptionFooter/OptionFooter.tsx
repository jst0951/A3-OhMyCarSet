import Icon from '@/components/common/Icon';
import * as S from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { Dispatch, useEffect, useRef, useState } from 'react';
import Estimate from '../Estimate/Estimate';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { OptionDataT } from '../SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import CountingAnimation from '@/utils/CountingAnimation';
import { useWaitingContext } from '@/contexts/WaitingProvider';
import { SelectOptionData, useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { useLocation } from 'react-router-dom';

interface OptionFooterProps {
  hovered?: boolean;
  setHovered?: Dispatch<React.SetStateAction<boolean>>;
  selectedData?: OptionDataT;
  prevTotal: number;
  tempTotal: number;
  setShowFeedback?: Dispatch<React.SetStateAction<number>>;
}

interface SelectOptionStateT {
  dataList: SelectOptionData[];
  totalPrice: number;
}

export interface SectionListT {
  sectionTitle: string;
  totalPrice: number;
  subList: Array<
    Array<{
      id: number;
      name: string;
      price: number;
      imgSrc: string | null;
    }>
  >;
}

export interface myPalisadeProps {
  mode: string;
  single: SelectOptionStateT;
  multi: SectionListT;
}

export default function OptionFooter({
  hovered,
  setHovered,
  selectedData,
  prevTotal,
  tempTotal,
  setShowFeedback,
}: OptionFooterProps) {
  const { pathname } = useLocation();
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();
  const buttonRef = useRef<HTMLInputElement>(null);
  const estimateRef = useRef<HTMLInputElement>(null);
  const [showEstimate, setShowEstimate] = useState<boolean>(false);
  const { setWaiting } = useWaitingContext();

  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();

  const handleMouseEnter = () => {
    if (selfModeStep > 6 || setHovered === undefined) return;
    if (!hovered) setHovered(true);
  };

  const handleClickEstimate = () => {
    setShowEstimate((prev) => !prev);
  };

  const handleClickPrev = () => {
    if (selfModeStep !== 1) {
      setSelfModeStep((prev) => prev - 1);
    }
  };

  const selectOptionDispatch = useSelectOptionDispatch();

  const setInSessionStorage = () => {
    const sectionList: SectionListT = {
      sectionTitle: '옵션',
      totalPrice: selectPackageState.totalPrice,
      subList: Array.from(selectPackageState.packageList).map((packageData) =>
        Array.from(packageData.selectedList.values())
      ),
    };

    const myPalisade: myPalisadeProps = {
      mode: pathname,
      single: selectOptionState,
      multi: sectionList,
    };

    sessionStorage.setItem('myPalisade', JSON.stringify(myPalisade));
  };

  const handleClickNext = (optionId: number) => {
    if (selfModeStep < 7 && setShowFeedback !== undefined) {
      if (selectedData === undefined) return;
      setWaiting(true);
      setShowFeedback(selectedData.id);
      selectOptionDispatch({
        type: 'UPDATE_LIST',
        payload: {
          optionId,
          newOptionData: {
            selectedId: selectedData.id,
            selectedName: selectedData.name,
            price: selectedData.price,
            imgSrc: selectedData.imgSrc,
          },
        },
      });
      setTimeout(() => {
        setShowFeedback(0);
        setWaiting(false);
        setSelfModeStep((prev) => prev + 1);
        if (selfModeStep < 7 && setHovered !== undefined) setHovered(false);
      }, 2000);
    } else {
      setInSessionStorage();

      setSelfModeStep(8);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      estimateRef.current &&
      !estimateRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowEstimate(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [estimateRef]);

  return (
    <>
      <S.OptionFooterContainer>
        <S.OptionFooterWrapper>
          <S.FooterDimmed />
          <S.TotalPriceContainer>
            <S.TotalPriceButton ref={buttonRef} onClick={handleClickEstimate} $show={showEstimate}>
              총 견적금액 <Icon icon="TotalPriceIcon" size={16} />
            </S.TotalPriceButton>
            <S.TotalPrice>
              <S.Price>
                <CountingAnimation startValue={prevTotal} endValue={tempTotal} duration={1000} />
              </S.Price>
              원
            </S.TotalPrice>
          </S.TotalPriceContainer>
          <S.CompleteButtonContainer>
            <S.PrevButton $disable={selfModeStep === 1} onClick={handleClickPrev}>
              이전
            </S.PrevButton>
            <div onMouseEnter={handleMouseEnter}>
              <RectButton type="recommended" page="self" onClick={() => handleClickNext(selfModeStep)}>
                선택완료
              </RectButton>
            </div>
          </S.CompleteButtonContainer>
        </S.OptionFooterWrapper>
        <S.EstimateContainer ref={estimateRef} $show={showEstimate}>
          <Estimate onClick={handleClickEstimate} tempTotal={tempTotal} />
        </S.EstimateContainer>
      </S.OptionFooterContainer>
    </>
  );
}
