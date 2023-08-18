import * as S from './LoadingStep.style';
import loadingStepList from '@/asset/data/loadingStepList.json';

export default function LoadingStep() {
  return (
    <>
      <S.LoadingStepContainer>
        {loadingStepList.map((data, idx) => (
          <S.LoadingStep key={data.step} $idx={idx}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="currentColor" />
              <path
                d="M6 11.5L9.5 15L15.5 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="18"
                strokeDashoffset="18"
              />
            </svg>
            <S.StepText $idx={idx}>{data.text}</S.StepText>
          </S.LoadingStep>
        ))}
      </S.LoadingStepContainer>
    </>
  );
}
