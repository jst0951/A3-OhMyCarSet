import { useCarDictState } from '@/contexts/CarDictProvider';
import * as S from './CarDictModal.style';
import Icon from '@/components/common/Icon';
import { colors } from '@/style/theme';

export default function CarDictModal() {
  const { clickedData } = useCarDictState();

  return (
    <>
      {clickedData && (
        <S.ModalContainer>
          <S.Header>
            <S.TitleContainer>
              <Icon icon="DictionaryOnIcon" size={18} color={colors.iconYellow} />
              <S.Title>{clickedData.keyword}</S.Title>
            </S.TitleContainer>
            <S.CloseButton>이해했어요!</S.CloseButton>
          </S.Header>
          {clickedData.imgSrc !== null && (
            <S.Image>
              <img src={`${import.meta.env.VITE_STATIC_API_URL}/${clickedData.imgSrc}`} alt={clickedData.keyword} />
            </S.Image>
          )}
          <S.Description>{clickedData.description}</S.Description>
        </S.ModalContainer>
      )}
    </>
  );
}
