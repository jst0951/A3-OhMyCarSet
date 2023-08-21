import * as S from './DescriptionModal.style';

interface ModalProps {
  title: string;
  description: string;
  imgSrc: string;
}

export default function DescriptionModal({ title, description, imgSrc }: ModalProps) {
  return (
    <S.ModalContainer>
      <S.TitleContainer>{title}</S.TitleContainer>
      <img src={`${import.meta.env.VITE_STATIC_API_URL}/${imgSrc}`} alt={title} />
      <S.DescriptionContainer>{description}</S.DescriptionContainer>
    </S.ModalContainer>
  );
}
