import * as S from './DescriptionModal.style';
import Icon from '../../common/Icon';
import { useModalDispatch, useModalState } from '@/contexts/ModalProvider';

export default function DescriptionModal() {
  const { item } = useModalState();
  const modalDispatch = useModalDispatch();

  const handleClick = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    item && (
      <S.ModalContainer>
        <S.CloseButton onClick={handleClick}>
          <Icon icon="CloseIcon" />
        </S.CloseButton>
        <S.ModalMain>
          <S.TitleContainer>{item.optionName}</S.TitleContainer>
          <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} alt={item.optionName} />
          <S.DescriptionContainer>
            {item.description.split('\\n').map((line, index) => (
              <div key={index}>
                {line}
                <br />
                <br />
              </div>
            ))}
          </S.DescriptionContainer>
        </S.ModalMain>
      </S.ModalContainer>
    )
  );
}
