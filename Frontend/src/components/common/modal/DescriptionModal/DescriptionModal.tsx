import { useModalContext } from '@/contexts/ModalProvider';
import * as S from './DescriptionModal.style';
import Icon from '../../Icon';

interface ModalProps {
  title: string;
  description: string;
  imgSrc: string;
}

export default function DescriptionModal({ title, description, imgSrc }: ModalProps) {
  const { setOpen } = useModalContext();

  return (
    <S.ModalContainer>
      <S.CloseButton onClick={() => setOpen(false)}>
        <Icon icon="ModalClose" />
      </S.CloseButton>
      <S.ModalMain>
        <S.TitleContainer>{title}</S.TitleContainer>
        <img src={`${import.meta.env.VITE_STATIC_API_URL}/${imgSrc}`} alt={title} />
        <S.DescriptionContainer>{description}</S.DescriptionContainer>
      </S.ModalMain>
    </S.ModalContainer>
  );
}
