import * as Style from './SelfModeNav.style';
import optionList from '@/asset/data/optionList.json';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export default function SelfModeNav() {
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();

  const handleClickOption = (selectedOption: number) => {
    setSelfModeStep(selectedOption);
  };

  return (
    <>
      <Style.SelfModeNavContainer>
        {optionList.map((option) => (
          <Style.NavCategoryContainer
            key={option.id}
            $active={option.id === selfModeStep}
            $disabled={option.id > selfModeStep} // TO DO : 값이 있으면 클릭되게
            onClick={() => handleClickOption(option.id)}
          >
            {`0${option.id} ${option.name}`}
          </Style.NavCategoryContainer>
        ))}
        <Style.CategoryActiveBorder $activeCategory={selfModeStep} />
        <Style.NavBottomBorder />
      </Style.SelfModeNavContainer>
    </>
  );
}
