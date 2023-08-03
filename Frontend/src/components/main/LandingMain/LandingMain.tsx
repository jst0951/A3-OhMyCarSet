import Icon from '@/components/common/Icon';
import TrimCardList from '../TrimCard/TrimCard';
import * as Style from './LandingMain.style';

function LandingMain() {
  return (
    <>
      <Style.LandingMainContainer>
        <Style.LandingMainBackground>
          <Style.LandingMainContent>
            <Style.LandingMainTextContainer>
              <Style.LandingSubText>내 차 만들기</Style.LandingSubText>
              <Style.LandingMainText>PALISADE</Style.LandingMainText>
            </Style.LandingMainTextContainer>
          </Style.LandingMainContent>
          <Style.LandingDimmed>
            <TrimCardList />
          </Style.LandingDimmed>
        </Style.LandingMainBackground>
        <Style.ShowMoreContainer>
          <Style.ShowMoreText>자세한 설명과 비교를 원한다면</Style.ShowMoreText>
          <Style.IconWrapper>
            <Icon icon="ShowMoreIcon" size={26} />
            <Icon icon="ShowMoreIcon" size={26} />
          </Style.IconWrapper>
        </Style.ShowMoreContainer>
      </Style.LandingMainContainer>
    </>
  );
}

export default LandingMain;
