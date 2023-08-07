import { useState } from 'react';
import * as Style from './SelfModeNav.style';
import optionList from '@/asset/data/optionList.json';

export default function SelfModeNav() {
  const [activeOption, setActiveOption] = useState<number>(1);

  const handleClickOption = (selectedOption: number) => {
    setActiveOption(selectedOption);
  };

  return (
    <>
      <Style.SelfModeNavContainer>
        {optionList.map((option) => (
          <Style.NavOptionContainer
            key={option.id}
            $active={activeOption === option.id}
            onClick={() => handleClickOption(option.id)}
          >
            {`0${option.id} ${option.name}`}
          </Style.NavOptionContainer>
        ))}
        <Style.OptionActiveBorder $activeOption={activeOption} />
        <Style.NavBottomBorder />
      </Style.SelfModeNavContainer>
    </>
  );
}
