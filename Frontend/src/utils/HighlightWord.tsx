import { useCarDictContext } from '@/contexts/CarDictProvider';
import { useDictionaryOnContext } from '@/contexts/DictionaryOnProvider';
import { colors } from '@/style/theme';
import { styled } from 'styled-components';

interface Props {
  children: string | undefined;
}

export default function HighlightWord({ children }: Props) {
  const { carDict } = useCarDictContext();
  const { dictionaryOn } = useDictionaryOnContext();

  if (!dictionaryOn) return children;

  const keywordArr = carDict.map((item) => item.keyword);
  let highlightedStr = children || '';

  keywordArr.forEach((keyword) => {
    highlightedStr = highlightedStr.replace(keyword, (match) => `<span>${match}</span>`);
  });

  return <Highlight dangerouslySetInnerHTML={{ __html: highlightedStr }} />;
}

const Highlight = styled.div`
  & span {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    padding: 2px 6px;
    border-radius: 6px;
    background-color: ${colors.iconYellow};
  }
`;
