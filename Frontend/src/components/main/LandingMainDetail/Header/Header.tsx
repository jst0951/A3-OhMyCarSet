import * as Style from './Header.style';
import HeaderItem from '../HeaderItem/HeaderItem';

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

export interface DetailHeaderProps {
  trimData: TrimData[];
}

export default function Header({ trimData }: DetailHeaderProps) {
  return (
    <>
      <Style.TitleContainer>
        <Style.Title>모델 한 눈에 비교하기</Style.Title>
      </Style.TitleContainer>
      <Style.Container>
        <Style.TrimContainer>
          {trimData && trimData.map((trim) => <HeaderItem key={trim.id} headerData={trim} />)}
        </Style.TrimContainer>
      </Style.Container>
    </>
  );
}
