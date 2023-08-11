import { useEffect, useState } from 'react';
import OptionFooter from '../OptionFooter/OptionFooter';
import * as Style from './SelfModeSingle.style';
import fetchData from '@/apis/fetchData';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { OptionData } from '../SelfModeMain';
import OptionItem from '../../OptionItem/OptionItem';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';

const categoryNameList = [
  {
    key: 'powertrain',
    text: '파워트레인',
  },
  {
    key: 'wd',
    text: '구동 방식',
  },
  {
    key: 'body',
    text: '바디 타입',
  },
  {
    key: 'exterior_color',
    text: '외장 색상',
  },
  {
    key: 'interior_color',
    text: '내장 색상',
  },
  {
    key: 'wheel',
    text: '휠 선택',
  },
];

export default function SelfModeSingle() {
  const { selfModeStep } = useSelfModeContext();
  const selectOptionState = useSelectOptionState();
  const [stepData, setStepData] = useState<OptionData[]>([]);
  const [tempTotal, setTempTotal] = useState<number>(0);
  const [prevTotal, setPrevTotal] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [showFeedback, setShowFeedback] = useState<number>(0);

  const fetchStepData = async () => {
    try {
      const response = await fetchData(`selective_option/${categoryNameList[selfModeStep - 1].key}`);
      setStepData(response);
      // console.log(response);
      // 옵션 초기화
      setSelectedOption(1);
      setTempTotal(selectOptionState.totalPrice + response[selectedOption - 1].price);
      setPrevTotal(selectOptionState.totalPrice + response[selectedOption - 1].price);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  const handleClickOption = (selectedOptionId: number) => {
    setSelectedOption(selectedOptionId);
  };

  useEffect(() => {
    fetchStepData();
  }, [selfModeStep]);

  useEffect(() => {
    console.log(prevTotal, tempTotal);
    setPrevTotal(tempTotal);
    setTempTotal(selectOptionState.totalPrice + stepData[selectedOption - 1]?.price);
  }, [selectedOption]);

  return (
    <>
      <Style.SelfModeSingleContainer>
        <Style.SelfModeImage>
          {stepData[selectedOption - 1] && (
            <img
              src={`${import.meta.env.VITE_STATIC_API_URL}/${stepData[selectedOption - 1]?.imgSrc}`}
              alt={stepData[selectedOption - 1]?.name}
            />
          )}
        </Style.SelfModeImage>
        <Style.SelfModeOption>
          <Style.TitleContainer>
            <Style.Title>{categoryNameList[selfModeStep - 1].text}</Style.Title>
            <Style.TitleText>을 선택해주세요.</Style.TitleText>
          </Style.TitleContainer>
          <Style.OptionContainer>
            {stepData.map((data) => (
              <OptionItem
                key={data.id}
                optionData={data}
                isActive={selectedOption === data.id}
                onClick={() => handleClickOption(data.id)}
                showFeedback={showFeedback}
              />
            ))}
          </Style.OptionContainer>
          <OptionFooter
            selectedData={stepData[selectedOption - 1]}
            prevTotal={prevTotal}
            tempTotal={tempTotal}
            setShowFeedback={setShowFeedback}
          />
        </Style.SelfModeOption>
      </Style.SelfModeSingleContainer>
    </>
  );
}
