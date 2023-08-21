import { MouseEvent, ReactNode, useRef } from 'react';
import ReactDom from 'react-dom';
import * as S from './ModalPortal.style';
import { useModalDispatch, useModalState } from '@/contexts/ModalProvider';

interface Props {
  children: ReactNode;
}

export default function ModalPortal({ children }: Props) {
  const { isOpen } = useModalState();
  const ModalDispatch = useModalDispatch();

  const modalRef = useRef<HTMLDivElement>(null);
  const el = document.getElementById('modal-root') as HTMLElement;

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      ModalDispatch('CLOSE_MODAL');
    }
  };

  return isOpen
    ? ReactDom.createPortal(
        <S.Container onClick={handleClickOutside}>
          <div ref={modalRef}>{children}</div>
        </S.Container>,
        el
      )
    : null;
}
