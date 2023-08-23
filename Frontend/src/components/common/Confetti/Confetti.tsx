import React from 'react';
import { keyframes } from 'styled-components';
import * as S from './Confetti.style';

interface ConfettiProps {
  left: number;
  width: number;
  heigth: number;
  confettiNum: number;
}
const makeItRain = (height: number) => {
  return keyframes`
   from {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  
  to {
    opacity: 0;
    transform: translateY(${height}px);
  }
    `;
};

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const colors = ['#FF7676', '#FFB876', '#76ADFF'];

export default function Confetti({ left, width, heigth, confettiNum }: ConfettiProps) {
  const confetti: React.JSX.Element[] = Array.from({ length: 13 }).map((_, index) => {
    const spaceWidth = width / confettiNum;
    let confettiWidth;
    let confettiHeight;
    let delay;
    let animationIteration;
    let duration;

    if (index % 3 === 0) {
      confettiWidth = 3;
      confettiHeight = 10;
      delay = 1;
      duration = 2.5;
      animationIteration = 2;
    } else if (index % 4 === 0) {
      confettiWidth = 5;
      confettiHeight = 12;
      delay = 2;
      duration = 2;
      animationIteration = 2;
    } else {
      confettiWidth = 8;
      confettiHeight = 16;
      delay = randomInRange(0, 0.5);
      duration = randomInRange(0.7, 1.2);
      animationIteration = 5;
    }
    const animation = makeItRain(heigth);

    return (
      <S.ConfettiDiv
        key={index}
        $left={left + spaceWidth * index}
        $color={colors[index % colors.length]}
        $transform={randomInRange(-80, 80)}
        $animation={animation}
        $width={confettiWidth}
        $height={confettiHeight}
        $animation_iteration={animationIteration}
        $animation_delay={delay}
        $animation_duration={duration}
      ></S.ConfettiDiv>
    );
  });

  return <S.Wrapper>{confetti}</S.Wrapper>;
}
