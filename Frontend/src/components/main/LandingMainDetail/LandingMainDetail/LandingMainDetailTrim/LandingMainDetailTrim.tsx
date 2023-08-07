import * as Style from './LandingMainDetailTrim.style';

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

export default function LandingMainDetailTrim({ trimData }: TrimProps) {
  const { name, defaultPrice, repColor } = trimData;

  return (
    <>
      <Style.MainDetailTrimContainer>
        <Style.MainDetailTrimImgContainer>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${repColor.imgSrc}`} alt={name} />
        </Style.MainDetailTrimImgContainer>
        <Style.MainDetailTrimPrice>{defaultPrice.toLocaleString()}원 부터</Style.MainDetailTrimPrice>
      </Style.MainDetailTrimContainer>
    </>
  );
}
