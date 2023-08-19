import * as S from './SelfModeNav.style';
import optionList from '@/asset/data/optionList.json';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export default function SelfModeNav() {
  const selectOptionState = useSelectOptionState();
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();

  const handleClickOption = (selectedOption: number) => {
    setSelfModeStep(selectedOption);
  };

  const checkDisabled = (id: number) => {
    if (id <= selfModeStep) return false;
    if (id < 7 && selectOptionState.dataList[id - 1].selectedName === null) return true;
    return false;
  };

  return (
    <>
      <S.SelfModeNavContainer>
        {optionList.map((option) => (
          <S.NavCategoryContainer
            key={option.id}
            $active={option.id === selfModeStep}
            $disabled={checkDisabled(option.id)}
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
