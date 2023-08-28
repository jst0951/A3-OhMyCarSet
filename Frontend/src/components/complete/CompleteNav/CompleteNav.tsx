import * as S from './CompleteNav.style';
import optionList from '@/asset/data/optionList.json';

export default function CompleteNav() {
  return (
    <>
      <S.SelfModeNavContainer>
        {optionList.map((option) => (
          <S.NavCategoryContainer key={option.id} $active={option.id === 8}>
            {`0${option.id} ${option.name}`}
          </S.NavCategoryContainer>
        ))}
        <S.CategoryActiveBorder $activeCategory={8} />
        <S.NavBottomBorder />
      </S.SelfModeNavContainer>
    </>
  );
}
