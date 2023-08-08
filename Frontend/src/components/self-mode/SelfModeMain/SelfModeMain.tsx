import * as Style from './SelfModeMain.style';
import selectiveOptionData from '../../../asset/data/selectiveOptionData.json';
import OptionItem from '../OptionItem/OptionItem';
import { useState } from 'react';
import OptionFooter from './OptionFooter/OptionFooter';

export default function SelfModeMain() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleClickOption = (selectedOptionId: number) => {
    setSelectedOption(selectedOptionId);
  };
  return (
    <>
      <Style.SelfModeMainContainer>
        <Style.SelfModeImage>
          <img
            src={`${import.meta.env.VITE_STATIC_API_URL}/${selectiveOptionData[0].imgSrc}`}
            alt={selectiveOptionData[0].name}
          />
        </Style.SelfModeImage>
        <Style.SelfModeOption>
          <Style.TitleContainer>
            <Style.Title>파워트레인</Style.Title>
            <Style.TitleText>을 선택해주세요.</Style.TitleText>
          </Style.TitleContainer>
          <Style.OptionContainer>
            {selectiveOptionData.map((data) => (
              <OptionItem
                key={data.id}
                optionData={data}
                isActive={selectedOption === data.id}
                onClick={() => handleClickOption(data.id)}
              />
            ))}
          </Style.OptionContainer>
          <OptionFooter />
        </Style.SelfModeOption>
      </Style.SelfModeMainContainer>
    </>
  );
}
