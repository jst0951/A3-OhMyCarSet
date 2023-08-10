import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import * as Style from './GuideModeSingleTag.style';
import guideTagData from '@/asset/data/guideTagData.json';
import { CheckIcon } from '@/asset/icons';
import { UncheckIcon } from '@/asset/icons';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useState } from 'react';

export default function GuideModeSingleTag() {
  const [hover, setHover] = useState<boolean>(false);
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();
  const { selectTagList, setSelectTagList } = useSelectTagContext();

  const currentPage = GuideModeStep - 1;
  const tagData = guideTagData[currentPage].tagList;
  let TagList: Array<string> = [];

  if (Array.isArray(tagData)) {
    TagList = tagData;
  } else {
    Object.values(tagData).forEach((tags) => {
      TagList = TagList.concat(tags);
    });
  } //이렇게 type error 잡는게 맞는지...

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
