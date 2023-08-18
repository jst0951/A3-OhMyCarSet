import * as S from './HeaderItem.style';

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
      <S.HeaderTrimContainer>
        {best && <S.HeaderItemBest>Best</S.HeaderItemBest>}
        <S.HeaderItemContainer>
          <S.HeaderItemName>{name}</S.HeaderItemName>
          <S.HeaderItemDescription>{description}</S.HeaderItemDescription>
        </S.HeaderItemContainer>
      </S.HeaderTrimContainer>
    </>
  );
}
