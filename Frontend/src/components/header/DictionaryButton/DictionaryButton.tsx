import Icon from '@/components/common/Icon';

import * as S from './DictionaryButton.style';
import { useDictionaryOnContext } from '@/contexts/DictionaryOnProvider';

export default function DictionaryButton() {
  const { dictionaryOn, setDictionaryOn } = useDictionaryOnContext();

  const toggleDictionary = () => {
    setDictionaryOn((prev) => !prev);
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
