import RectButton from '../../button/RectButton/RectButton';
import Icon from '@/components/common/Icon';
import * as S from './Modal.style';
import { IconType } from '@/components/common/Icon';

export type buttonT = {
  name: string;
  onClick: () => void;
};

interface ModalProps {
  icon: IconType;
  title: string;
  description: string;
  buttonLeft: buttonT;
  buttonRight: buttonT;
  imgSrc?: Array<string>;
}

export default function Modal({ icon, title, description, buttonLeft, buttonRight }: ModalProps) {
  return (
    <S.ModalContainer>
      <Icon icon={icon} size={36} />
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.DescriptionContainer>
        {description.split('\\n').map((line, index) => (
          <S.Line key={index}>
            {line}
            <br />
          </S.Line>
        ))}
      </S.DescriptionContainer>
      <S.ButtonContainer>
        <RectButton type="notrecommended" page="modal" onClick={buttonLeft.onClick}>
          {buttonLeft.name}
        </RectButton>
        <RectButton type="recommended" page="modal" onClick={buttonRight.onClick}>
          {buttonRight.name}
        </RectButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
}
