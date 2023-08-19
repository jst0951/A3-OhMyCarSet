import { useModalContext } from '@/contexts/ModalProvider';
import { MouseEvent, ReactNode, useRef } from 'react';
import ReactDom from 'react-dom';
import * as S from './ModalPortal.style';

interface Props {
  children: ReactNode;
}

export default function ModalPortal({ children }: Props) {
  const { open, setOpen } = useModalContext();

  const modalRef = useRef<HTMLDivElement>(null);
  const el = document.getElementById('modal-root') as HTMLElement;

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  return open
    ? ReactDom.createPortal(
        <S.Container onClick={handleClickOutside}>
          <div ref={modalRef}>{children}</div>
        </S.Container>,
        el
      )
    : null;
}
