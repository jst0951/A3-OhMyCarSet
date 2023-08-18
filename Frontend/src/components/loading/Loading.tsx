import { useEffect } from 'react';
import * as S from './Loading.style';
import LoadingCircle from './LoadingCircle/LoadingCircle';
import LoadingStep from './LoadingStep/LoadingStep';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/complete');
    }, 3000);
  }, []);

  return (
    <>
      <S.LoadingIndicator>
        <S.LoadingContainer>
          <LoadingCircle />
          <S.LoadingText>
            나만의 펠리세이드가
            <br />
            만들어지고 있어요!
          </S.LoadingText>
          <LoadingStep />
        </S.LoadingContainer>
      </S.LoadingIndicator>
    </>
  );
}
