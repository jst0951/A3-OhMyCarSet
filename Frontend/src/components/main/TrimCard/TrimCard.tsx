import Icon from '@/components/common/Icon';
import trimData from '@/asset/data/trimData.json';
import * as Style from './TrimCard.style';
import TrimDescription from '../TrimDescription/TrimDescription';
import { useState } from 'react';

type TrimData = {
  id: number;
  name: string;
  tag: string;
  price: number;
  descriptionCard?: {
    subTitle: string;
    subImage: boolean;
    descriptionData: Array<{
      main: string;
      sub: string;
    }>;
  } | null;
};

export interface TrimCardProps {
  trimData: TrimData;
}

function TrimCard({ trimData }: TrimCardProps) {
  const { id, name, tag, price, descriptionCard } = trimData;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Style.TrimCardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Style.TrimDescription>{`#${tag}`}</Style.TrimDescription>
        <Style.TrimName>{name}</Style.TrimName>
        <Style.TrimPriceContainer>
          <Style.TrimPrice>{`${price.toLocaleString()} 원 부터`}</Style.TrimPrice>
          <Icon icon="ArrowRightIcon" size={20} />
        </Style.TrimPriceContainer>
        {isHovered && (
          <Style.TrimDescriptionWrapper $id={id}>
            {descriptionCard && <TrimDescription trimData={trimData} />}
          </Style.TrimDescriptionWrapper>
        )}
      </Style.TrimCardContainer>
    </>
  );
}

export default function TrimCardList() {
  return (
    <>
      <Style.TrimCardListContainer>
        {trimData.map((trim) => (
          <TrimCard key={trim.id} trimData={trim} />
        ))}
      </Style.TrimCardListContainer>
    </>
  );
}
