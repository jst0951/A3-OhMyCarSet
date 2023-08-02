import { styled } from 'styled-components';
import { ReactComponent as HeaderDivider } from '../asset/icons/header_divider.svg';
import { ReactComponent as DictionaryOffIcon } from '../asset/icons/dictionary_off.svg';
import { ReactComponent as CarIcon } from '../asset/icons/header_car_icon.svg';
import { ReactComponent as MoreIcon } from '../asset/icons/more_icon.svg';
import { hyundaiLogo } from '../asset';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderSection>
          <HeaderLeftContainer>
            <HeaderLogo src={hyundaiLogo} alt="현대자동차"></HeaderLogo>
            <HeaderDivider />
            <HeaderMode>내 차 만들기</HeaderMode>
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <DictionaryContainer>
              <DictionaryOffIcon />
              <DictionaryText>백카사전 Off</DictionaryText>
            </DictionaryContainer>
            <HeaderDivider />
            <CarModelContainer>
              <CarIcon />
              <CarModelText>펠리세이드</CarModelText>
              <MoreIcon />
            </CarModelContainer>
          </HeaderRightContainer>
        </HeaderSection>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: 0 auto;
  padding: 30px 128px;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 149px;
  height: 21px;
`;

const HeaderMode = styled.div`
  font-family: 'headMedium3';
`;

const HeaderRightContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const DictionaryContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-right: 10px;
`;

const DictionaryText = styled.div`
  font-family: 'bodyRegular5';
`;

const CarModelContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const CarModelText = styled.div`
  margin-left: 4px;
  font-family: 'bodyRegular5';
`;
