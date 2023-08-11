import { useState } from 'react';
import Icon from '@/components/common/Icon';

import * as S from './DictionaryButton.style';

export default function DictionaryButton() {
  const [dictionaryOn, setDictionaryOn] = useState<boolean>(false);

  const toggleDictionary = () => {
    setDictionaryOn((prev) => !prev);
  };

  return (
    <S.DictionaryButtonContainer onClick={toggleDictionary}>
      <S.DictionaryIconWrapper>
        {dictionaryOn ? <Icon icon="DictionaryOnIcon" /> : <Icon icon="DictionaryOffIcon" />}
      </S.DictionaryIconWrapper>
      <S.DictionaryText $active={dictionaryOn}>백카사전 {dictionaryOn ? 'On' : 'Off'}</S.DictionaryText>
    </S.DictionaryButtonContainer>
  );
}
