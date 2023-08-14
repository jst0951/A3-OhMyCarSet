import { CorrectionIcon } from '@/asset/icons';
import { OptionData } from '@/components/self-mode/SelfModeMain/SelfModeMain';
import OptionList from '@/asset/data/optionList.json';
import * as S from './DetailItem.style';

interface CompleteOptionProps {
  data: OptionData;
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
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${data.imgSrc}`}
                alt={`임시`}
                width={194}
                height={144}
              />
            </S.ImgContainer>
            <S.SelectedName>{data.name}</S.SelectedName>
          </S.MainLeft>
          <S.MainRight>
            <S.OptionPrice>+{data.price.toLocaleString()}원</S.OptionPrice>
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
