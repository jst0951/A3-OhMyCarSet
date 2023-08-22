import HighlightWord from '@/utils/HighlightWord';
import * as S from './Item.style';
import { useModalDispatch } from '@/contexts/ModalProvider';

type Item = {
  optionId: number;
  optionName: string;
  description: string;
  imgSrc: string;
};

interface ItemProps {
  item: Item;
}

export default function Item({ item }: ItemProps) {
  const modalDispatch = useModalDispatch();

  const handleClick = () => {
    modalDispatch({ type: 'DEFAULT_OPTION', payload: item });
  };

  return (
    <>
      <S.ItemContainer onClick={handleClick}>
        <S.Item>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} alt={item.optionName} loading="lazy" />
        </S.Item>
        <S.ItemDescription>{HighlightWord({ children: item.optionName })}</S.ItemDescription>
      </S.ItemContainer>
    </>
  );
}
