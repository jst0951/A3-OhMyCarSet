// import OptionFooter from '../OptionFooter/OptionFooter';
import { useEffect, useState } from 'react';
import * as S from './SelfModeMulti.style';
import fetchData from '@/apis/fetchData';

const optionList = [
  {
    key: 'system',
    text: '시스템',
  },
  {
    key: 'temperature',
    text: '온도관리',
  },
  {
    key: 'exterior_device',
    text: '외부장치',
  },
  {
    key: 'interior_device',
    text: '내부장치',
  },
];

export default function SelfModeMulti() {
  const [currentFilter, setCurrentFilter] = useState<number>(1);

  const handleFilterOption = (idx: number) => {
    setCurrentFilter(idx + 1);
  };

  const fetchStepData = async () => {
    try {
      const response = await fetchData(`selective_option/${optionList[0].key}`);
      console.log(response);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchStepData();
  }, []);

  return (
    <>
      <S.SelfModeMultiContainer>
        <S.SelfModeImage></S.SelfModeImage>
        <S.SelfModeOption>
          <S.FilterContainer>
            {optionList.map((option, idx) => (
              <S.FilterButton key={idx} $active={currentFilter === idx + 1} onClick={() => handleFilterOption(idx)}>
                {option.text}
              </S.FilterButton>
            ))}
          </S.FilterContainer>
          <S.TitleContainer>
            <S.Title>옵션</S.Title>
            <S.TitleText>을 선택해주세요.</S.TitleText>
          </S.TitleContainer>
        </S.SelfModeOption>
      </S.SelfModeMultiContainer>
    </>
  );
}
