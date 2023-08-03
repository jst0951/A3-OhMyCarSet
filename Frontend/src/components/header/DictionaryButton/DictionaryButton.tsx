import { useState } from 'react';
import Icon from '@/components/common/Icon';

import * as Style from './DictionaryButton.style';

export default function DictionaryButton() {
  const [dictionaryOn, setDictionaryOn] = useState<boolean>(false);

  const toggleDictionary = () => {
    setDictionaryOn((prev) => !prev);
  };

  return (
    <Style.DictionaryButtonContainer onClick={toggleDictionary}>
      <Style.DictionaryIconWrapper>
        {dictionaryOn ? <Icon icon="DictionaryOnIcon" /> : <Icon icon="DictionaryOffIcon" />}
      </Style.DictionaryIconWrapper>
      <Style.DictionaryText $active={dictionaryOn}>백카사전 {dictionaryOn ? 'On' : 'Off'}</Style.DictionaryText>
    </Style.DictionaryButtonContainer>
  );
}
