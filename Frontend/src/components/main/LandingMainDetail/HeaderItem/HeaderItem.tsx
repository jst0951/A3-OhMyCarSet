import * as Style from './HeaderItem.style';

type HeaderData = {
  id: number;
  name: string;
  description: string;
  defaultPrice: number;
  repColor: {
    name: string;
    colorCode: string;
    imgSrc: string;
  };
  best: boolean;
};

interface LandingHeaderProps {
  headerData: HeaderData;
}

export default function HeaderItem({ headerData }: LandingHeaderProps) {
  const { name, description, best } = headerData;

  return (
    <>
      <Style.HeaderTrimContainer>
        {best && <Style.HeaderItemBest>Best</Style.HeaderItemBest>}
        <Style.HeaderItemContainer>
          <Style.HeaderItemName>{name}</Style.HeaderItemName>
          <Style.HeaderItemDescription>{description}</Style.HeaderItemDescription>
        </Style.HeaderItemContainer>
      </Style.HeaderTrimContainer>
    </>
  );
}
