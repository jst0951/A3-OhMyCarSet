import * as S from './NotFound.style';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <S.MainContainer>
        <S.Description>페이지를 찾을 수 없습니다</S.Description>
        <RectButton type="recommended" page="final" onClick={handleClick}>
          홈으로
        </RectButton>
      </S.MainContainer>
    </>
  );
}
