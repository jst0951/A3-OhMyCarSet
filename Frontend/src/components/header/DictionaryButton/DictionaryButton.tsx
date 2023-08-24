import Icon from '@/components/common/Icon';
import * as S from './DictionaryButton.style';
import { useCarDictDispatch, useCarDictState } from '@/contexts/CarDictProvider';

export default function DictionaryButton() {
  const { dictionaryOn, isInit } = useCarDictState();
  const CarDictDispatch = useCarDictDispatch();

  const toggleDictionary = () => {
    if (isInit) CarDictDispatch({ type: 'INTRO_MODAL' });
    CarDictDispatch({ type: 'TOGGLE_DICT' });
  };

  return (
    <S.DictionaryButtonContainer onClick={toggleDictionary} $active={dictionaryOn}>
      <S.DictionaryIconWrapper>
        {dictionaryOn ? <Icon icon="DictionaryOnIcon" /> : <Icon icon="DictionaryOffIcon" />}
      </S.DictionaryIconWrapper>
      <S.DictionaryText>백카사전 {dictionaryOn ? 'On' : 'Off'}</S.DictionaryText>
    </S.DictionaryButtonContainer>
  );
}
