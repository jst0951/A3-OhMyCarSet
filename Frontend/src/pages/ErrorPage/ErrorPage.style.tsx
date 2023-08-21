import { styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1024px;
  height: 100vh;

  margin: 0 auto;
  padding-top: 86px;
  gap: 100px;
`;

export const Description = styled.div`
  opacity: 0.5;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 50px;
  font-weight: 500;
  line-height: 28.6px;
  letter-spacing: -0.66px;
`;
