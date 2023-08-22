import * as S from './CompleteMain.style';
import { useState } from 'react';
import Summary from '@/components/complete/Summary/Summary';
import RectButton from '@/components/common/button/RectButton/RectButton';
import Detail from '@/components/complete/Detail/Detail';
import Fireworks from '../FireWorks/FireWorks';

export default function CompleteMain() {
  const getSingleDataList = JSON.parse(sessionStorage.getItem('myPalisade') || '').single.dataList;
  const [isExternal, setIsExternal] = useState<boolean>(true);

  const clickHandler = (external: boolean) => {
    setIsExternal(external);
  };

  return (
    <S.MainContainer>
      <S.GuideText>나를 위한 팰리세이드가 완성되었어요!</S.GuideText>
      <S.CarImg $isExternal={isExternal}>
        <img
          src={`${import.meta.env.VITE_STATIC_API_URL}/${getSingleDataList[isExternal ? 3 : 4].imgSrc}`}
          alt={getSingleDataList[isExternal ? 3 : 4].name}
        />
      </S.CarImg>
      {/* <Fireworks direction="left" number={30}></Fireworks>
      <Fireworks direction="right" number={30}></Fireworks> */}
      <S.InternalExternal>
        <S.Button onClick={() => clickHandler(true)} $isExternal={isExternal}>
          외부
        </S.Button>
        <S.Button onClick={() => clickHandler(false)} $isExternal={!isExternal}>
          내부
        </S.Button>
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
      <S.DetailContainer>
        <Detail />
      </S.DetailContainer>
    </S.MainContainer>
  );
}
