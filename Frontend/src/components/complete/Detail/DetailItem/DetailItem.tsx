import { CorrectionIcon } from '@/asset/icons';
import * as S from './DetailItem.style';
import { useNavigate } from 'react-router-dom';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { SelectOptionData, useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import { SelectPackageOptionData, useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
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
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const name = 'selectedName' in data ? data.selectedName : 'optionName' in data ? data.optionName : data.name;

  const updateContextWithSession = () => {
    const selectDataInSession = JSON.parse(sessionStorage.getItem('myPalisade') || '');
    const selectOption = selectDataInSession.single.dataList;
    const selectPackage = selectDataInSession.multi.subList;
    const mode = selectDataInSession.mode;

    selectOption.forEach((data: SelectOptionData, idx: number) =>
      selectOptionDispatch({
        type: 'UPDATE_LIST',
        payload: {
          optionId: idx + 1,
          newOptionData: {
            selectedId: data.selectedId,
            selectedName: data.selectedName,
            price: data.price,
            imgSrc: data.imgSrc,
          },
        },
      })
    );
    selectPackageDispatch({ type: 'INIT_LIST' });
    selectPackage.forEach((packageData: SelectPackageOptionData[], idx: number) => {
      packageData.forEach((data: SelectPackageOptionData) => {
        selectPackageDispatch({
          type: 'UPDATE_LIST',
          payload: {
            filterId: idx + 1,
            newData: {
              id: data.id,
              name: data.name,
              price: data.price,
              imgSrc: data.imgSrc,
            },
            recommendId: data.id,
          },
        });
      });
    });
    mode === SELF_MODE_URL ? navigate(mode) : navigate(mode, { state: { correction: true } });
  };

  const singleCorrection = (index: number) => {
    updateContextWithSession();
    setSelfModeStep(index);
  };

  const multiCorrection = (index: number) => {
    updateContextWithSession();
    setSelfModeStep(7);
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: index + 1,
    });
  };

  const correctionClickHandler = () => {
    if ('stepName' in data && index === 0) {
      navigate('/');
    } else if ('stepName' in data && index !== undefined) {
      // single
      singleCorrection(index);
    }
    if ('name' in data && index !== undefined) {
      // multi
      multiCorrection(index);
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
