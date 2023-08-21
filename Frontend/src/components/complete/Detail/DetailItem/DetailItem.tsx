import { CorrectionIcon } from '@/asset/icons';
import * as S from './DetailItem.style';
import { useNavigate } from 'react-router-dom';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { SelectOptionData } from '@/contexts/SelectOptionProvider';
import { SELF_MODE_URL } from '@/constants';

interface CompleteOptionProps {
  data: SelectOptionData;
  index: number;
}

export default function DetailItem({ data, index }: CompleteOptionProps) {
  const navigate = useNavigate();
  const { setSelfModeStep } = useSelfModeContext();

  const correctionClickHandler = () => {
    navigate(SELF_MODE_URL);
    setSelfModeStep(index + 1);
  };

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.Title>{data.stepName}</S.Title>
          <S.Price>{data.price.toLocaleString()}원</S.Price>
        </S.TitleContainer>
        <S.MainContainer>
          <S.MainLeft>
            <S.ImgContainer>
              <img src={`${import.meta.env.VITE_STATIC_API_URL}/${data.imgSrc}`} />
            </S.ImgContainer>
            <S.SelectedName>{data.selectedName}</S.SelectedName>
          </S.MainLeft>
          <S.MainRight>
            <S.OptionPrice>+ {data.price.toLocaleString()}원</S.OptionPrice>
            <S.Correction onClick={correctionClickHandler}>
              <CorrectionIcon />
              수정
            </S.Correction>
          </S.MainRight>
        </S.MainContainer>
      </S.Section>
    </>
  );
}
