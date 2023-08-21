import HighlightWord from '@/utils/HighlightWord';
import * as S from './Item.style';
import { useModalContext } from '@/contexts/ModalProvider';
import { useState } from 'react';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import DescriptionModal from '@/components/common/modal/DescriptionModal/DescriptionModal';

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
  const [imgClick, setImgClick] = useState(false);

  const handleClick = () => {
    setImgClick(true);
    setOpen(true);
  };

  return (
    <>
      <S.ItemContainer onClick={handleClick}>
        <S.Item>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} alt={item.optionName} />
        </S.Item>
        <S.ItemDescription>{HighlightWord({ children: item.optionName })}</S.ItemDescription>
      </S.ItemContainer>
      {imgClick && (
        <ModalPortal>
          <DescriptionModal title={item.optionName} description={item.description} imgSrc={item.imgSrc} />
        </ModalPortal>
      )}
    </>
  );
}
