import Icon from '@/components/common/Icon';
import trimData from '@/asset/data/trimData.json';
import * as S from './TrimCard.style';
import TrimDescription from '../TrimDescription/TrimDescription';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TrimData = {
  id: number;
  name: string;
  tag: string;
  price: number;
  route: string;
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
  const navigate = useNavigate();
  const { id, name, tag, price, route, descriptionCard } = trimData;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickTrimCard = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <S.TrimCardContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClickTrimCard(route)}
      >
        <S.TrimDescription>{`#${tag}`}</S.TrimDescription>
        <S.TrimName>{name}</S.TrimName>
        <S.TrimPriceContainer>
          <S.TrimPrice>{`${price.toLocaleString()} 원 부터`}</S.TrimPrice>
          <Icon icon="ArrowRightIcon" size={20} />
        </S.TrimPriceContainer>
        {isHovered && (
          <S.TrimDescriptionWrapper $id={id}>
            {descriptionCard && <TrimDescription trimData={trimData} />}
          </S.TrimDescriptionWrapper>
        )}
      </S.TrimCardContainer>
    </>
  );
}

export default function TrimCardList() {
  return (
    <>
      <S.TrimCardListContainer>
        {trimData.map((trim) => (
          <TrimCard key={trim.id} trimData={trim} />
        ))}
      </S.TrimCardListContainer>
    </>
  );
}
