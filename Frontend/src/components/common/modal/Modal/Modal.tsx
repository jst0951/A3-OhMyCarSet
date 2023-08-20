import { useEffect, useRef } from 'react';
import RectButton from '../../button/RectButton/RectButton';
import Icon from '@/components/common/Icon';
import * as S from './Modal.style';

export type buttonT = {
  name: string;
  isClose: boolean;
  onClick: () => void;
};

interface ModalProps {
  icon: string;
  title: string;
  description: string;
  buttonLeft: buttonT;
  buttonRight: buttonT;
  imgSrc?: Array<string>;
}

export default function Modal({ icon, title, description, buttonLeft, buttonRight }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const clickOutside = (e: MouseEvent) => {
    if (modalRef.current !== null && !modalRef.current.contains(e.target as Node)) {
      if (buttonLeft.isClose) {
        buttonLeft.onClick();
      }
      if (buttonRight.isClose) {
        buttonRight.onClick();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <S.MainContainer>
      <S.ModalContainer ref={modalRef}>
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
    </S.MainContainer>
  );
}
