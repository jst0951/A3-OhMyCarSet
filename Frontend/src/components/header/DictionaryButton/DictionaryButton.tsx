import { useState } from 'react';
import { ReactComponent as DictionaryOffIcon } from '../../../asset/icons/dictionary_off.svg';
import { ReactComponent as DictionaryOnIcon } from '../../../asset/icons/dictionary_on.svg';

import * as Style from './DictionaryButton.style';

export default function DictionaryButton() {
  const [dictionaryOn, setDictionaryOn] = useState<boolean>(false);

  const toggleDictionary = () => {
    setDictionaryOn((prev) => !prev);
  };

  return (
    <Style.DictionaryButtonContainer onClick={toggleDictionary}>
      <Style.DictionaryIconWrapper>
        {dictionaryOn ? <DictionaryOnIcon /> : <DictionaryOffIcon />}
      </Style.DictionaryIconWrapper>
      <Style.DictionaryText $active={dictionaryOn}>백카사전 {dictionaryOn ? 'On' : 'Off'}</Style.DictionaryText>
    </Style.DictionaryButtonContainer>
  );
}
