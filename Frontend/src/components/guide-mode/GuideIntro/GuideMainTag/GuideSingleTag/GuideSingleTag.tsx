import * as S from './GuideSingleTag.style';
import guideSingleTagData from '@/asset/data/guideSingleTagData.json';
import { CheckIcon } from '@/asset/icons';
import { UncheckIcon } from '@/asset/icons';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useState } from 'react';

type TagType = {
  key: string;
  value: string;
};

interface Props {
  step: number;
  show: boolean;
  setGuideModeStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function GuideSingleTag({ step, show, setGuideModeStep }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { setSelectTag } = useSelectTagContext();
  const TagList = guideSingleTagData[step - 1].tagList;

  const handleClick = (tag: TagType, idx: number) => {
    if (idx === 0) {
      setSelectTag((prev) => ({ ...prev, age: Number(tag.value) }));
    } else if (idx === 1) {
      setSelectTag((prev) => ({ ...prev, gender: tag.value }));
    }
    setGuideModeStep(step + 1);
  };

  return (
    <S.TagListContainer $show={show} $step={step}>
      {TagList.map((tag, idx) => (
        <S.TagContainer
          key={idx}
          onClick={() => handleClick(tag, idx)}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <S.TagName>{tag.key}</S.TagName>
          {hovered === idx ? <CheckIcon /> : <UncheckIcon />}
        </S.TagContainer>
      ))}
    </S.TagListContainer>
  );
}
