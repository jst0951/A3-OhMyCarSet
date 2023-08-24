import ReactDom from 'react-dom';
import { carDictionaryImage } from '@/asset';
import * as S from './CarDictIntroModal.style';
import Icon from '@/components/common/Icon';
import { MouseEvent, useRef } from 'react';
import { useCarDictDispatch, useCarDictState } from '@/contexts/CarDictProvider';

export default function CarDictIntroModal() {
  const { introModal } = useCarDictState();
  const carDictDispatch = useCarDictDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const el = document.getElementById('modal-root') as HTMLElement;

  const handleClickClose = () => {
    carDictDispatch({ type: 'CLOSE_INTRO' });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      carDictDispatch({ type: 'CLOSE_INTRO' });
    }
  };

  return introModal
    ? ReactDom.createPortal(
        <S.Modal onClick={handleClickOutside}>
          <S.Container ref={modalRef} $show={introModal}>
            <S.Close onClick={handleClickClose}>
              <Icon icon="CloseIcon" size={24} />
            </S.Close>
            <S.Title>
              <Icon icon="LightIcon" color="#ffdf8f" />
              <S.Text>모르는 단어가 있다면 백카사전을 활용해보세요</S.Text>
            </S.Title>
            <S.Description>
              백카사전이 <span>ON</span> 되면, 하이라이트된 단어 클릭 시 초보자를 위한 설명이 제공됩니다.
            </S.Description>
            <img src={carDictionaryImage} alt="백카사전" />
          </S.Container>
        </S.Modal>,
        el
      )
    : null;
}
