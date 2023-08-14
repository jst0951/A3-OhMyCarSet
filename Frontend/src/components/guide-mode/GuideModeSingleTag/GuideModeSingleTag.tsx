import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import * as Style from './GuideModeSingleTag.style';
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
    <Style.TagListContainer>
      {TagList.map((tag, index) => (
        <Style.TagContainer
          key={index}
          onClick={() => handleClick(tag)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Style.TagName>{tag}</Style.TagName>
          {hovered === index ? <CheckIcon /> : <UncheckIcon />}
        </Style.TagContainer>
      ))}
    </Style.TagListContainer>
  );
}
