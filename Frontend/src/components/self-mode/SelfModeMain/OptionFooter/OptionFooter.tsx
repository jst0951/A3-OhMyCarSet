import Icon from '@/components/common/Icon';
import * as S from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { Dispatch, useEffect, useRef, useState } from 'react';
import Estimate from '../Estimate/Estimate';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { OptionDataT } from '../SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import CountingAnimation from '@/utils/CountingAnimation';
import { useNavigate } from 'react-router-dom';
import { useWaitingContext } from '@/contexts/WaitingProvider';

interface OptionFooterProps {
  selectedData?: OptionDataT;
  prevTotal: number;
  tempTotal: number;
  setShowFeedback?: Dispatch<React.SetStateAction<number>> | undefined;
}

export default function OptionFooter({ selectedData, prevTotal, tempTotal, setShowFeedback }: OptionFooterProps) {
  const navigate = useNavigate();
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();
  const buttonRef = useRef<HTMLInputElement>(null);
  const estimateRef = useRef<HTMLInputElement>(null);
  const [showEstimate, setShowEstimate] = useState<boolean>(false);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const { setWaiting } = useWaitingContext();

  const handleClickEstimate = () => {
    setShowEstimate((prev) => !prev);
  };

  const handleClickPrev = () => {
    if (selfModeStep !== 1) {
      setSelfModeStep((prev) => prev - 1);
    }
  };

  const selectOptionDispatch = useSelectOptionDispatch();

  const handleClickNext = (optionId: number) => {
    if (selfModeStep < 7 && setShowFeedback !== undefined) {
      if (selectedData === undefined) return;
      setDisableNext(true);
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
        setDisableNext(false);
        setWaiting(false);
        setSelfModeStep((prev) => prev + 1);
      }, 2000);
    } else {
      // 로딩 인디케이터
      navigate('/complete');
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
              </S.Price>{' '}
              원
            </S.TotalPrice>
          </S.TotalPriceContainer>
          <S.CompleteButtonContainer>
            <S.PrevButton $disable={selfModeStep === 1} onClick={handleClickPrev}>
              이전
            </S.PrevButton>
            <S.NextButton $disable={disableNext}>
              <RectButton type="recommended" page="self" onClick={() => handleClickNext(selfModeStep)}>
                선택완료
              </RectButton>
            </S.NextButton>
          </S.CompleteButtonContainer>
        </S.OptionFooterWrapper>
        <S.EstimateContainer ref={estimateRef} $show={showEstimate}>
          <Estimate onClick={handleClickEstimate} tempTotal={tempTotal} />
        </S.EstimateContainer>
      </S.OptionFooterContainer>
    </>
  );
}
