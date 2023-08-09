// import OptionFooter from '../OptionFooter/OptionFooter';
import * as Style from './SelfModeMulti.style';

export default function SelfModeMulti() {
  return (
    <>
      <Style.SelfModeMultiContainer>
        <Style.SelfModeImage>
          {/* <img
            src={`${import.meta.env.VITE_STATIC_API_URL}/${selectiveOptionData[0].imgSrc}`}
            alt={selectiveOptionData[0].name}
          /> */}
        </Style.SelfModeImage>
        <Style.SelfModeOption>
          <Style.TitleContainer>
            <Style.Title>파워트레인</Style.Title>
            <Style.TitleText>을 선택해주세요.</Style.TitleText>
          </Style.TitleContainer>
          <Style.OptionContainer>{/* TO DO */}</Style.OptionContainer>
          {/* <OptionFooter /> */}
        </Style.SelfModeOption>
      </Style.SelfModeMultiContainer>
    </>
  );
}
