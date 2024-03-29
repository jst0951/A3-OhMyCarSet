import { useCarDictDispatch, useCarDictState } from '@/contexts/CarDictProvider';
import { colors } from '@/style/theme';
import { MouseEvent } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: string | undefined;
}

export default function HighlightWord({ children }: Props) {
  const { dataList, dictionaryOn } = useCarDictState();
  const CarDictDispatch = useCarDictDispatch();

  if (!dictionaryOn) {
    if (children === undefined) return children;
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }

  const keywordArr = dataList.map((item) => item.keyword);
  let highlightedStr = children || '';

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    const target = event.target as HTMLDivElement;
    if (target.tagName === 'SPAN') {
      CarDictDispatch({ type: 'CLICK_WORD', payload: { keyword: target.textContent || '' } });
    }
  };

  keywordArr.forEach((keyword) => {
    highlightedStr = highlightedStr.replace(keyword, (match) => `<span>${match}</span>`);
  });

  return <Highlight dangerouslySetInnerHTML={{ __html: highlightedStr }} onClick={handleClick} />;
}

const Highlight = styled.div`
  & span {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    padding: 2px 6px;
    border-radius: 6px;
    background-color: ${colors.iconYellow};
    cursor: pointer;
  }
`;
