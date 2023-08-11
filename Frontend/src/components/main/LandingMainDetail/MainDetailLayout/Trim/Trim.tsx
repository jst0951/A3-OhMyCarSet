import * as S from './Trim.style';

type TrimData = {
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

export interface TrimProps {
  trimData: TrimData;
}

export default function Trim({ trimData }: TrimProps) {
  const { name, defaultPrice, repColor } = trimData;

  return (
    <>
      <S.TrimContainer>
        <S.TrimImgContainer>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${repColor.imgSrc}`} alt={name} width={214} />
        </S.TrimImgContainer>
        <S.TrimPrice>{defaultPrice.toLocaleString()}원 부터</S.TrimPrice>
      </S.TrimContainer>
    </>
  );
}
