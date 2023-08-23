import { MouseEvent } from 'react';
import { useState } from 'react';
import * as S from './ExternalCarModel.style';

export default function ExternalCarModel({ color }: { color: number }) {
  const [isClicked, setIsClicked] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);
  const [pointerX, setPointerX] = useState(window.innerWidth / 2);
  const imageArray = Array.from({ length: 60 }, (_, index) => index + 1);

  const handleOnMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!isClicked) {
      setIsClicked(true);
      setPointerX(e.screenX);
    } else {
      setIsClicked(false);
    }
  };

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isClicked && pointerX > e.screenX + 10) {
      setCurrentImg(((currentImg + 1) % 60) + 1);
      setPointerX(e.screenX);
    } else if (isClicked && pointerX < e.screenX - 10) {
      currentImg - 1 < 1 ? setCurrentImg(60) : setCurrentImg(currentImg - 1);
      setPointerX(e.screenX);
    }
  };

  const handleOnMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <S.MainContainer onMouseDown={handleOnMouseDown} onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
      {imageArray.map((num) => (
        <S.CarImgContainer key={num} $isDisplay={num === currentImg}>
          <img
            src={`${import.meta.env.VITE_STATIC_API_URL}/exterior_color/vr360/${color}/${num}.webp`}
            alt="360 이미지"
          />
        </S.CarImgContainer>
      ))}
    </S.MainContainer>
  );
}
