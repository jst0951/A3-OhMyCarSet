import * as S from './CompleteMain.style';
import { useState } from 'react';
import Summary from '../Summary/Summary';
import RectButton from '@/components/common/button/RectButton/RectButton';

export default function CompleteMain() {
  const [endPoint, setEndPoint] = useState<string>('selective_option/4_1.png');
  const [isExternal, setIsExternal] = useState<boolean>(true);

  const clickHandler = (end: string, external: boolean) => {
    setEndPoint(end);
    setIsExternal(external);
  };

  return (
    <S.MainContainer>
      <S.GuideText>나를 위한 팰리세이드가 완성되었어요!</S.GuideText>
      <S.CarImg>
        <img src={`${import.meta.env.VITE_STATIC_API_URL}/${endPoint}`} alt={`임시`} width={589} height={326} />
      </S.CarImg>
      <S.InternalExternal>
        <S.External onClick={() => clickHandler('selective_option/4_1.png', true)} $isExternal={isExternal}>
          외부
        </S.External>
        <S.Internal onClick={() => clickHandler('selective_option/5_1.png', false)} $isExternal={isExternal}>
          내부
        </S.Internal>
      </S.InternalExternal>
      <S.SummaryContainer>
        <Summary />
      </S.SummaryContainer>
      <S.ButtonLine>
        <RectButton type="recommended" page="final">
          구매 상담 신청
        </RectButton>
        <RectButton type="etc" page="final">
          시승 신청하기
        </RectButton>
        <RectButton type="notrecommended" page="final">
          공유하기
        </RectButton>
        <RectButton type="notrecommended" page="final">
          저장하기
        </RectButton>
      </S.ButtonLine>
      <S.DetailContainer></S.DetailContainer>
    </S.MainContainer>
  );
}
