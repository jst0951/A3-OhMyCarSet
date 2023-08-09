import * as Style from './Item.style';
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
    <Style.ItemContainer>
      <Style.Item>
        <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} width={80} height={60} />
      </Style.Item>
      <Style.ItemDescription>{item.optionName}</Style.ItemDescription>
    </Style.ItemContainer>
  );
}
