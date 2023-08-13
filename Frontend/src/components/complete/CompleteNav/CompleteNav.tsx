import * as S from './CompleteNav.style';
import optionList from '@/asset/data/optionList.json';

export default function CompleteNav() {
  const COMPLETE_PAGE = 8;
  return (
    <>
      <S.NavContainer>
        {optionList.map((option) => (
          <S.NavCategoryContainer key={option.id} $active={option.id === COMPLETE_PAGE}>
            {`0${option.id} ${option.name}`}
          </S.NavCategoryContainer>
        ))}
        <S.CategoryActiveBorder $activeCategory={COMPLETE_PAGE} />
        <S.NavBottomBorder />
      </S.NavContainer>
    </>
  );
}
