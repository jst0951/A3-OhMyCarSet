import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import * as Style from './GuideModeSingleTag.style';
import guideSingleTagData from '@/asset/data/guideSingleTagData.json';
import { CheckIcon } from '@/asset/icons';
import { UncheckIcon } from '@/asset/icons';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useState } from 'react';

export default function GuideModeSingleTag() {
  const [hover, setHover] = useState<boolean>(false);
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();
  const { selectTagList, setSelectTagList } = useSelectTagContext();
  const currentPage = GuideModeStep - 1;
  const TagList = guideSingleTagData[currentPage].tagList;

  const handleClick = (tag: string) => {
    switch (currentPage) {
      case 0:
        selectTagList[0].age = tag;
        setGuideModeStep(GuideModeStep + 1);
        setSelectTagList(selectTagList);
        break;
      case 1:
        selectTagList[1].sex = tag;
        setGuideModeStep(GuideModeStep + 1);
        setSelectTagList(selectTagList);
        break;
    }
  };

  return (
    <Style.TagListContainer>
      {TagList.map((tag, index) => (
        <Style.TagContainer key={index} onClick={() => handleClick(tag)} onMouseEnter={() => setHover(true)}>
          <Style.TagName>{tag}</Style.TagName>
          {hover ? <CheckIcon /> : <UncheckIcon />}
        </Style.TagContainer>
      ))}
    </Style.TagListContainer>
  );
}
