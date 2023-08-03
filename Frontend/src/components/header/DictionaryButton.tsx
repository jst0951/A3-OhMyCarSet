import { useState } from 'react';
import { css, styled } from 'styled-components';
import { ReactComponent as DictionaryOffIcon } from '../../asset/icons/dictionary_off.svg';
import { ReactComponent as DictionaryOnIcon } from '../../asset/icons/dictionary_on.svg';
import { headRegular5 } from '../../style/typefaces';
import { colors } from '../../style/theme';

const DictionaryButton = () => {
  const [dictionaryOn, setDictionaryOn] = useState<boolean>(false);

  const toggleDictionary = () => {
    setDictionaryOn((prev) => !prev);
  };

  return (
    <DictionaryButtonContainer onClick={toggleDictionary}>
      <DictionaryIconWrapper>{dictionaryOn ? <DictionaryOnIcon /> : <DictionaryOffIcon />}</DictionaryIconWrapper>
      <DictionaryText $active={dictionaryOn}>백카사전 {dictionaryOn ? 'On' : 'Off'}</DictionaryText>
    </DictionaryButtonContainer>
  );
};

export default DictionaryButton;

const DictionaryButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-right: 10px;

  cursor: pointer;
`;

const DictionaryIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  > svg {
    position: absolute;
    bottom: 0;
  }
`;

const DictionaryText = styled.div<{ $active: boolean }>`
  ${headRegular5}
  ${(props) =>
    props.$active
      ? css`
          color: ${colors.iconYellow};
        `
      : css`
          color: ${colors.coolGreyBlack};
        `}
`;
