import * as S from './Loading.style';
import LoadingCircle from './LoadingCircle/LoadingCircle';
import LoadingStep from './LoadingStep/LoadingStep';

export default function Loading() {
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
