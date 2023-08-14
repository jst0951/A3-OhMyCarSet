import * as S from './Item.style';
type Item = {
  optionId: number;
  optionName: string;
  imgSrc: string;
};

interface ItemProps {
  item: Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <S.ItemContainer>
      <S.Item>
        <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} alt={item.optionName} />
      </S.Item>
      <S.ItemDescription>{item.optionName}</S.ItemDescription>
    </S.ItemContainer>
  );
}
