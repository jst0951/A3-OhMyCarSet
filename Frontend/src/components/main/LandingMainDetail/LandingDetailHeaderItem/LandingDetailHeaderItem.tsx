import * as Style from './LandingDetailHeaderItem.style';

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

export interface LandingHeaderProps {
  headerData: HeaderData;
}

export default function LandingDetailHeaderItem({ headerData }: LandingHeaderProps) {
  const { name, description, best } = headerData;

  return (
    <>
      <Style.MainHeaderTrimContainer>
        {best && <Style.MainHeaderItemBest>Best</Style.MainHeaderItemBest>}
        <Style.MainHeaderItemContainer>
          <Style.MainHeaderItemName>{name}</Style.MainHeaderItemName>
          <Style.MainHeaderItemDescription>{description}</Style.MainHeaderItemDescription>
        </Style.MainHeaderItemContainer>
      </Style.MainHeaderTrimContainer>
    </>
  );
}
