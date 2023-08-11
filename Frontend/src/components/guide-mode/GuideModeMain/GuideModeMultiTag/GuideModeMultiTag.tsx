import * as S from './GuideModeMultiTag.style';
import guideMultiTagData from '@/asset/data/guideMultiTagData.json';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { Dispatch, useState } from 'react';

interface MultiProps {
  setComplete: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideModeMultiTag({ setComplete }: MultiProps) {
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
      setComplete(true);
    } else {
      setComplete(false);
    }
  };
  const handleMouseEnter = (tag: string) => {
    if (selectedTagList.size !== 3) {
      setHoveredTag(tag);
    }
  };

  return (
    <S.TagListContainer>
      {tagCategory.map((category) => (
        <S.TagSubContainer key={category.id}>
          <S.TagSubListTitle>{category.title}</S.TagSubListTitle>
          <S.TagSubListContainer>
            {category.tagList.map((tag, index) => (
              <S.TagContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                onClick={() => handleClick(tag)}
                $disable={selectedTagList.size === 3}
                $selected={selectedTagList.has(tag)}
              >
                <S.TagName>{tag}</S.TagName>

                {selectedTagList.has(tag) ? (
                  <S.TagOrder>{Array.from(selectedTagList).findIndex((value) => value === tag) + 1}</S.TagOrder>
                ) : (
                  hoveredTag === tag && <S.TagOrder>{selectedTagList.size + 1}</S.TagOrder>
                )}
              </S.TagContainer>
            ))}
          </S.TagSubListContainer>
        </S.TagSubContainer>
      ))}
    </S.TagListContainer>
  );
}
