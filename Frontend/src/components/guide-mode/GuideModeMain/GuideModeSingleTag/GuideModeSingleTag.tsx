import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import * as S from './GuideModeSingleTag.style';
import guideSingleTagData from '@/asset/data/guideSingleTagData.json';
import { CheckIcon } from '@/asset/icons';
import { UncheckIcon } from '@/asset/icons';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useState } from 'react';

export default function GuideModeSingleTag() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();
  const { selectTagList, setSelectTagList } = useSelectTagContext();
  const currentPage = GuideModeStep - 1;
  const TagList = guideSingleTagData[currentPage].tagList;

  const handleClick = (tag: string) => {
    selectTagList[currentPage].value = tag;
    setGuideModeStep(GuideModeStep + 1);
    setSelectTagList(selectTagList);
  };

  return (
    <S.TagListContainer>
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
