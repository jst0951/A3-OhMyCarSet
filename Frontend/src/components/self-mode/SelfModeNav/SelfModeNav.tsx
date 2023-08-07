import { useState } from 'react';
import * as Style from './SelfModeNav.style';
import optionList from '@/asset/data/optionList.json';

export default function SelfModeNav() {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const handleClickOption = (selectedOption: number) => {
    setActiveCategory(selectedOption);
  };

  return (
    <>
      <Style.SelfModeNavContainer>
        {optionList.map((option) => (
          <Style.NavCategoryContainer
            key={option.id}
            $active={activeCategory === option.id}
            onClick={() => handleClickOption(option.id)}
          >
            {`0${option.id} ${option.name}`}
          </Style.NavCategoryContainer>
        ))}
        <Style.CategoryActiveBorder $activeCategory={activeCategory} />
        <Style.NavBottomBorder />
      </Style.SelfModeNavContainer>
    </>
  );
}
