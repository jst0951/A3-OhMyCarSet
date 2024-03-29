import React from 'react';
import { keyframes } from 'styled-components';
import * as S from './Confetti.style';

interface ConfettiProps {
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

const colors = ['#FF7676', '#FFB876', '#ffe175', '#A5E776', '#76ADFF', '#c79fff'];

const WIDTH = 100;

export default function Confetti({ heigth, confettiNum }: ConfettiProps) {
  const confetti: React.JSX.Element[] = Array.from({ length: 13 }).map((_, index) => {
    const spaceWidth = WIDTH / confettiNum;
    let confettiWidth;
    let confettiHeight;
    let delay;
    let animationIteration;
    let duration;

    const randomIdx = Math.floor(Math.random() * (colors.length - 1));

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
        $left={spaceWidth * index}
        $color={colors[randomIdx]}
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
