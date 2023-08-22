import { CorrectionIcon } from '@/asset/icons';
import * as S from './DetailItem.style';
import { useNavigate } from 'react-router-dom';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { SelectOptionData } from '@/contexts/SelectOptionProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import { SELF_MODE_URL } from '@/constants';

interface ItemProps {
  optionId: number;
  optionName: string;
  imgSrc: string;
}

type SelectPackageData = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
};

interface CompleteOptionProps {
  data: SelectOptionData | ItemProps | SelectPackageData;
  index?: number;
}

export default function DetailItem({ data, index }: CompleteOptionProps) {
  const navigate = useNavigate();
  const { setSelfModeStep } = useSelfModeContext();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const name = 'selectedName' in data ? data.selectedName : 'optionName' in data ? data.optionName : data.name;

  const correctionClickHandler = () => {
    if ('stepName' in data && index === 0) {
      navigate('/');
    } else if ('stepName' in data && index !== undefined) {
      navigate(SELF_MODE_URL);
      setSelfModeStep(index);
    }
    if ('name' in data && index !== undefined) {
      navigate(SELF_MODE_URL);
      setSelfModeStep(7);
      currentPackageDispatch({
        type: 'UPDATE_FILTER',
        payload: index + 1,
      });
    }
  };

  return (
    <>
      <S.MainContainer>
        <S.MainLeft>
          <S.ImgContainer>
            <img src={`${import.meta.env.VITE_STATIC_API_URL}/${data.imgSrc}`} alt={name || '옵션 이미지'} />
          </S.ImgContainer>
          <S.SelectedName>{name}</S.SelectedName>
        </S.MainLeft>
        <S.MainRight>
          {'price' in data ? (
            <>
              <S.OptionPrice>+ {data.price?.toLocaleString()} 원</S.OptionPrice>
              <S.Correction onClick={correctionClickHandler}>
                <CorrectionIcon />
                수정
              </S.Correction>
            </>
          ) : (
            <S.OptionPrice>기본 포함</S.OptionPrice>
          )}
        </S.MainRight>
      </S.MainContainer>
    </>
  );
}
