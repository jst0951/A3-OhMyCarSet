import * as S from './GuideSingleTag.style';
import guideSingleTagData from '@/asset/data/guideSingleTagData.json';
import { CheckIcon } from '@/asset/icons';
import { UncheckIcon } from '@/asset/icons';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useState } from 'react';

interface Props {
  step: number;
  show: boolean;
  setGuideModeStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function GuideSingleTag({ step, show, setGuideModeStep }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { selectTagList, setSelectTagList } = useSelectTagContext();
  const TagList = guideSingleTagData[step - 1].tagList;

  const handleClick = (tag: string) => {
    selectTagList[step - 1].value = tag;
    setGuideModeStep(step + 1);
    setSelectTagList(selectTagList);
  };

  return (
    <S.TagListContainer $show={show} $step={step}>
      {TagList.map((tag, index) => (
        <S.TagContainer
          key={index}
          onClick={() => handleClick(tag)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <S.TagName>{tag}</S.TagName>
          {hovered === index ? <CheckIcon /> : <UncheckIcon />}
        </S.TagContainer>
      ))}
    </S.TagListContainer>
  );
}
