import * as S from './ItemMain.style';
import { CorrectionIcon } from '@/asset/icons';

interface ItemProps {
  imgSrc: string;
  name: string;
  price?: number;
}

export default function ItemMain({ imgSrc, name, price }: ItemProps) {
  return (
    <>
      <S.MainLeft>
        <S.ImgContainer>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${imgSrc}`} />
        </S.ImgContainer>
        <S.SelectedName>{name}</S.SelectedName>
      </S.MainLeft>
      <S.MainRight>
        {price ? (
          <>
            <S.OptionPrice>+ {price.toLocaleString()} 원</S.OptionPrice>
            <S.Correction>
              <CorrectionIcon />
              수정
            </S.Correction>
          </>
        ) : (
          <S.OptionPrice>기본 포함</S.OptionPrice>
        )}
      </S.MainRight>
    </>
  );
}
