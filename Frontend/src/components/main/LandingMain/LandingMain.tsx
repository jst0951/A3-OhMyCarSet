import Icon from '@/components/common/Icon';
import TrimCardList from '../TrimCard/TrimCard';
import * as S from './LandingMain.style';

function LandingMain() {
  const handleClick = () => {
    window.scrollTo({ top: innerHeight - 50, behavior: 'smooth' });
  };

  return (
    <>
      <S.LandingMainContainer>
        <S.LandingMainContent>
          <S.LandingMainTextContainer>
            <S.LandingSubText>내 차 만들기</S.LandingSubText>
            <S.LandingMainText>PALISADE</S.LandingMainText>
          </S.LandingMainTextContainer>
        </S.LandingMainContent>
        <S.ShowMoreContainer>
          <TrimCardList />
          <S.ShowMoreText>자세한 설명과 비교를 원한다면</S.ShowMoreText>
          <S.IconWrapper onClick={handleClick}>
            <Icon icon="ShowMoreIcon" size={26} />
            <Icon icon="ShowMoreIcon" size={26} />
          </S.IconWrapper>
        </S.ShowMoreContainer>
      </S.LandingMainContainer>
    </>
  );
}

export default LandingMain;
