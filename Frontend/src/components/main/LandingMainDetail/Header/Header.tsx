import * as S from './Header.style';
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
      <S.TitleContainer>
        <S.Title>모델 한 눈에 비교하기</S.Title>
      </S.TitleContainer>
      <S.Container>
        <S.TrimContainer>
          {trimData && trimData.map((trim) => <HeaderItem key={trim.id} headerData={trim} />)}
        </S.TrimContainer>
      </S.Container>
    </>
  );
}
