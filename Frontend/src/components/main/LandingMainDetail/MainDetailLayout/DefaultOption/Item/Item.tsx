import HighlightWord from '@/utils/HighlightWord';
import * as S from './Item.style';
import { useModalContext } from '@/contexts/ModalProvider';

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
  const { setOpen } = useModalContext();

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <S.ItemContainer>
        <S.Item>
          <img
            src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`}
            alt={item.optionName}
            onClick={() => handleClick()}
          />
        </S.Item>
        <S.ItemDescription>{HighlightWord({ children: item.optionName })}</S.ItemDescription>
      </S.ItemContainer>
    </>
  );
}
