import * as Style from './GuideModeMultiTag.style';
import guideMultiTagData from '@/asset/data/guideMultiTagData.json';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { Dispatch, useEffect, useState } from 'react';

interface MultiProps {
  setShowButton: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideModeMultiTag({ setShowButton }: MultiProps) {
  const { selectTagList, setSelectTagList } = useSelectTagContext();
  const [selectedTagList, setSelectedTagList] = useState<Set<string>>(new Set());
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const tagCategory = guideMultiTagData[0].category;
  const MAX_TAG_NUM = 3;

  const handleClick = (tag: string) => {
    if (selectedTagList.size !== 0 && selectedTagList.has(tag)) {
      selectedTagList.delete(tag);
    } else if (!selectedTagList.has(tag) && selectedTagList.size < MAX_TAG_NUM) {
      selectedTagList.add(tag);
    }
    setSelectedTagList(selectedTagList);
    if (selectedTagList.size === 3) {
      selectTagList[2].value = selectedTagList;
      setSelectTagList(selectTagList);
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const handleMouseEnter = (tag: string) => {
    if (selectedTagList.size !== 3) {
      setHoveredTag(tag);
    }
  };

  useEffect(() => {
    setShowButton(false);
  }, []);

  return (
    <Style.TagListContainer>
      {tagCategory.map((category) => (
        <Style.TagSubContainer key={category.id}>
          <Style.TagSubListTitle>{category.title}</Style.TagSubListTitle>
          <Style.TagSubListContainer>
            {category.tagList.map((tag, index) => (
              <Style.TagContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                onClick={() => handleClick(tag)}
                $disable={selectedTagList.size === 3}
                $selected={selectedTagList.has(tag)}
              >
                <Style.TagName>{tag}</Style.TagName>

                {selectedTagList.has(tag) ? (
                  <Style.TagOrder>{Array.from(selectedTagList).findIndex((value) => value === tag) + 1}</Style.TagOrder>
                ) : (
                  hoveredTag === tag && <Style.TagOrder>{selectedTagList.size + 1}</Style.TagOrder>
                )}
              </Style.TagContainer>
            ))}
          </Style.TagSubListContainer>
        </Style.TagSubContainer>
      ))}
    </Style.TagListContainer>
  );
}
