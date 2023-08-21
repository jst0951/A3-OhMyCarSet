import Icon from '@/components/common/Icon';
import * as S from './ListModal.style';
import { IconType } from '@/components/common/Icon';
import { colors } from '@/style/theme';
import { useModalContext } from '@/contexts/ModalProvider';
import Modal, { buttonT } from '../Modal/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';

interface ListModalProps {
  icon: IconType;
  mode: string;
}

interface PopUpModalProps {
  title: string;
  descripton: string;
  buttonLeft: buttonT;
  buttonRight: buttonT;
}

function PopUpModal({ title, descripton, buttonLeft, buttonRight }: PopUpModalProps) {
  return (
    <Modal
      icon="ModalReloadIcon"
      title={title}
      description={descripton}
      buttonLeft={buttonLeft}
      buttonRight={buttonRight}
    />
  );
}

export default function ListModal({ icon, mode }: ListModalProps) {
  const navigate = useNavigate();
  const { setOpen } = useModalContext();
  const [modalMode, setModalMode] = useState('list');
  const { setSelfModeStep } = useSelfModeContext();
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const buttonLeft = {
    name: '안할래요',
    onClick: () => setOpen(false),
  };
  const selfbuttonRight = {
    name: '변경할래요!',
    onClick: () => handleChangeToSelf(),
  };

  const guidebuttonRight = {
    name: '변경할래요!',
    onClick: () => handleChangeToGuide(),
  };

  const handleSelfModeClick = () => {
    if (mode === 'guide') {
      setModalMode('self');
    }
  };

  const handleGuideModeClick = () => {
    if (mode === 'self') {
      setModalMode('guide');
    }
  };

  const handleChangeToSelf = () => {
    setOpen(false);
    setSelfModeStep(1);
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: 1,
    });
    navigate('/self-mode');
  };

  const handleChangeToGuide = () => {
    setOpen(false);
    setSelfModeStep(1);
    selectOptionDispatch({
      type: 'INIT_LIST',
    });
    selectPackageDispatch({
      type: 'INIT_LIST',
    });
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: 1,
    });
    navigate('/guide-mode');
  };

  return (
    (modalMode === 'list' && (
      <S.ModalContainer>
        <Icon icon={icon} size={36} />
        <S.TitleContainer>내 차 만들기 방식 변경하기</S.TitleContainer>

        <S.SelfMode onClick={handleSelfModeClick}>
          <S.SelfRight>
            <S.SelfHeader>
              <S.SelfTitle>셀프 모드</S.SelfTitle>
              {mode === 'self' && <S.SelfProcessing>현재 진행중</S.SelfProcessing>}
            </S.SelfHeader>
            <S.SelfText>
              가장 일반적으로 많은 사람들이 선택한 <br />
              인기있는 옵션들을 보며 내 취향에 맞게 자유롭게 <br />
              옵션을 선택할 수 있어요.
            </S.SelfText>
          </S.SelfRight>
          <S.SelfLeft>
            <Icon icon="ArrowRightIcon"></Icon>
          </S.SelfLeft>
        </S.SelfMode>

        <S.GuideMode onClick={handleGuideModeClick}>
          <S.GuideRight>
            <S.GuideHeader>
              <S.GuideTitle>가이드 모드</S.GuideTitle>
              {mode === 'guide' && <S.GuideProcessing>현재 진행중</S.GuideProcessing>}
            </S.GuideHeader>
            <S.GuideText>
              내 상황과 성향에 맞는 옵션들을 추천받아
              <br />
              나에게 딱 맞는 옵션들로 구성된 차량 견적을
              <br />
              받아볼 수 있어요.
            </S.GuideText>
          </S.GuideRight>
          <S.GuideLeft>
            <Icon icon="ArrowRightIcon" color={colors.hyundaiWhite}></Icon>
          </S.GuideLeft>
        </S.GuideMode>
      </S.ModalContainer>
    )) ||
    (modalMode === 'self' && (
      <PopUpModal
        title="[셀프 모드]로 변경하시겠어요?"
        descripton="지금까지 선택했던 옵션들이 \n 유지된 채로 변경됩니다."
        buttonLeft={buttonLeft}
        buttonRight={selfbuttonRight}
      />
    )) ||
    (modalMode === 'guide' && (
      <PopUpModal
        title="[가이드 모드]로 변경하시겠어요?"
        descripton="변경하면 지금까지 선택했던 옵션들은 \n 저장되지 않아요."
        buttonLeft={buttonLeft}
        buttonRight={guidebuttonRight}
      />
    ))
  );
}
