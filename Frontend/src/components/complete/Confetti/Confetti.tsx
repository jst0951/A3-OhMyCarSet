import React from 'react';
import { keyframes } from 'styled-components';
import * as S from './Confetti.style';

const makeItRain = () => {
  return keyframes`
   from {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    transform: translateY(300px);
  }
    `;
};

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const colors = ['#FF7676', '#FFB876', '#76ADFF'];

export default function Confetti() {
  const confetti: React.JSX.Element[] = Array.from({ length: 13 }).map((_, index) => {
    let width;
    let height;
    let delay;
    let animationIteration;
    let duration;

    if (index % 3 === 0) {
      width = 3;
      height = 10;
      delay = 1;
      duration = 2.5;
      animationIteration = 2;
    } else if (index % 4 === 0) {
      width = 5;
      height = 12;
      delay = 2;
      duration = 2;
      animationIteration = 2;
    } else {
      width = 8;
      height = 16;
      delay = randomInRange(0, 0.5);
      duration = randomInRange(0.7, 1.2);
      animationIteration = 5;
    }
    const animation = makeItRain();

    return (
      <S.ConfettiDiv
        key={index}
        $left={30 + 3 * index}
        $color={colors[index % colors.length]}
        $transform={randomInRange(-80, 80)}
        $animation={animation}
        $width={width}
        $height={height}
        $animation_iteration={animationIteration}
        $animation_delay={delay}
        $animation_duration={duration}
      ></S.ConfettiDiv>
    );
  });

  return <S.Wrapper>{confetti}</S.Wrapper>;
}
