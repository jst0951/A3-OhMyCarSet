import { CorrectionIcon } from '@/asset/icons';
import { OptionDataT } from '@/components/self-mode/SelfModeMain/SelfModeMain';
import OptionList from '@/asset/data/optionList.json';
import * as S from './DetailItem.style';

interface CompleteOptionProps {
  data: OptionDataT;
  index: number;
}

export default function DetailItem({ data, index }: CompleteOptionProps) {
  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.Title>{OptionList[index].name}</S.Title>
          <S.Price>{data.price.toLocaleString()}원</S.Price>
        </S.TitleContainer>
        <S.MainContainer>
          <S.MainLeft>
            <S.ImgContainer>
              <img src={`${import.meta.env.VITE_STATIC_API_URL}/${data.imgSrc}`} />
            </S.ImgContainer>
            <S.SelectedName>{data.name}</S.SelectedName>
          </S.MainLeft>
          <S.MainRight>
            <S.OptionPrice>+ {data.price.toLocaleString()}원</S.OptionPrice>
            <S.Correction>
              <CorrectionIcon />
              수정
            </S.Correction>
          </S.MainRight>
        </S.MainContainer>
      </S.Section>
    </>
  );
}
