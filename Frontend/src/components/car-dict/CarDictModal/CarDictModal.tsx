import { useCarDictDispatch, useCarDictState } from '@/contexts/CarDictProvider';
import * as S from './CarDictModal.style';
import Icon from '@/components/common/Icon';
import { colors } from '@/style/theme';
import { MouseEvent, useRef } from 'react';
import ReactDom from 'react-dom';
import { useLocation } from 'react-router-dom';
import { GUIDE_MODE_URL, SELF_MODE_URL } from '@/constants';

const UTF_KR = 44032;
const NO_CONSONANT = 28;

export default function CarDictModal() {
  const { pathname } = useLocation();
  const { clickedData, isOpen } = useCarDictState();
  const CarDictDispatch = useCarDictDispatch();

  const modalRef = useRef<HTMLDivElement>(null);
  const el = document.getElementById('modal-root') as HTMLElement;

  const handleCloseModal = () => {
    CarDictDispatch({ type: 'CLOSE_MODAL' });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  const generateTitle = (keyword: string) => {
    const charCode = keyword.charCodeAt(keyword.length - 1);

    const consonantCode = (charCode - UTF_KR) % NO_CONSONANT;

    if (consonantCode === 0) {
      return `${keyword}가 뭔가요?`;
    }
    return `${keyword}이 뭔가요?`;
  };

  const checkInMode = () => {
    switch (pathname) {
      case SELF_MODE_URL:
        return true;
      case GUIDE_MODE_URL:
        return true;
      default:
        return false;
    }
  };

  return isOpen && clickedData
    ? ReactDom.createPortal(
        <S.ModalContainer onClick={handleClickOutside}>
          <S.Modal ref={modalRef} $inMode={checkInMode()}>
            <S.Header>
              <S.TitleContainer>
                <Icon icon="DictionaryOnIcon" size={18} color={colors.iconYellow} />
                <S.Title>{generateTitle(clickedData.keyword)}</S.Title>
              </S.TitleContainer>
              <S.CloseButton onClick={handleCloseModal}>이해했어요!</S.CloseButton>
            </S.Header>
            {clickedData.imgSrc !== null && (
              <S.Image>
                <img src={`${import.meta.env.VITE_STATIC_API_URL}/${clickedData.imgSrc}`} alt={clickedData.keyword} />
              </S.Image>
            )}
            <S.Description>{clickedData.description}</S.Description>
          </S.Modal>
        </S.ModalContainer>,
        el
      )
    : null;
}
