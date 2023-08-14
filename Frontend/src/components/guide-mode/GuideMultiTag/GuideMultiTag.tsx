import * as S from './GuideMultiTag.style';
import guideMultiTagData from '@/asset/data/guideMultiTagData.json';
import { GUIDE_MAX_TAG_NUM } from '@/constants';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { Dispatch, useEffect, useState } from 'react';

interface MultiProps {
  setShowButton: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideMultiTag({ setShowButton }: MultiProps) {
  const { selectTagList, setSelectTagList } = useSelectTagContext();
  const [selectedTagList, setSelectedTagList] = useState<Set<string>>(new Set());
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const tagCategory = guideMultiTagData[0].category;

  const handleClick = (tag: string) => {
    if (selectedTagList.size !== 0 && selectedTagList.has(tag)) {
      selectedTagList.delete(tag);
    } else if (!selectedTagList.has(tag) && selectedTagList.size < GUIDE_MAX_TAG_NUM) {
      selectedTagList.add(tag);
    }
    setSelectedTagList(selectedTagList);
    if (selectedTagList.size === GUIDE_MAX_TAG_NUM) {
      selectTagList[2].value = selectedTagList;
      setSelectTagList(selectTagList);
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleMouseEnter = (tag: string) => {
    if (selectedTagList.size !== GUIDE_MAX_TAG_NUM) {
      setHoveredTag(tag);
    }
  };

  useEffect(() => {
    setShowButton(false);
  }, []);

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
