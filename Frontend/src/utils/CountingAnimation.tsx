import { useEffect, useState } from 'react';

interface CountingAnimationProps {
  startValue: number;
  endValue: number;
  duration: number;
}

const CountingAnimation = ({ startValue, endValue, duration }: CountingAnimationProps) => {
  const [count, setCount] = useState(startValue);
  const increment = ((endValue - startValue) / (duration / 1000)) * (1 / 60);
  const shouldIncrement = startValue < endValue ? count < endValue : count > endValue;

  useEffect(() => {
    let startTime: number;
    let requestId: number;
    let currentCount = startValue;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (elapsedTime < duration && shouldIncrement) {
        currentCount += increment;
        setCount(currentCount);
        requestId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, [endValue, duration, increment, shouldIncrement, startValue]);

  return <>{Math.floor(count).toLocaleString()}</>;
};

export default CountingAnimation;
