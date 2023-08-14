import * as S from './SelfModeNav.style';
import optionList from '@/asset/data/optionList.json';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export default function SelfModeNav() {
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();

  const handleClickOption = (selectedOption: number) => {
    setSelfModeStep(selectedOption);
  };

  return (
    <>
      <S.SelfModeNavContainer>
        {optionList.map((option) => (
          <S.NavCategoryContainer
            key={option.id}
            $active={option.id === selfModeStep}
            $disabled={option.id > selfModeStep} // TO DO : 값이 있으면 클릭되게
            onClick={() => handleClickOption(option.id)}
          >
            {`0${option.id} ${option.name}`}
          </S.NavCategoryContainer>
        ))}
        <S.CategoryActiveBorder $activeCategory={selfModeStep} />
        <S.NavBottomBorder />
      </S.SelfModeNavContainer>
    </>
  );
}
