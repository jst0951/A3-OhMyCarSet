import { useEffect, useState } from 'react';
import OptionFooter from '../OptionFooter/OptionFooter';
import * as Style from './SelfModeSingle.style';
import fetchData from '@/apis/fetchData';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { OptionData } from '../SelfModeMain';
import OptionItem from '../../OptionItem/OptionItem';
import { useSelectOptionContext } from '@/contexts/SelectOptionProvider';

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
  const { selectOptionList, setSelectOptionList } = useSelectOptionContext();
  const [stepData, setStepData] = useState<OptionData[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const fetchStepData = async () => {
    try {
      const response = await fetchData(`selective_option/${categoryNameList[selfModeStep - 1].key}`);
      setStepData(response);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  const handleClickOption = (selectedOptionId: number) => {
    const data = stepData[selectedOptionId - 1];
    setSelectedOption(selectedOptionId);

    // OptionFooter에 onClick으로
    setSelectOptionList((prev) => {
      const updatedList = prev.map((option, idx) => {
        if (idx + 1 === selfModeStep) {
          console.log(option.id);
          return {
            ...option,
            selectedName: data.name,
            price: data.price,
            imgSrc: data.imgSrc,
          };
        }
        return option;
      });
      return updatedList;
    });
    console.log(selectOptionList);
  };

  useEffect(() => {
    fetchStepData();

    // 초기화
    setSelectedOption(1);
  }, [selfModeStep]);

  return (
    <>
      <Style.SelfModeSingleContainer>
        <Style.SelfModeImage>
          <img
            src={`${import.meta.env.VITE_STATIC_API_URL}/${stepData[selectedOption - 1]?.imgSrc}`}
            alt={stepData[selectedOption - 1]?.name}
          />
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
              />
            ))}
          </Style.OptionContainer>
          <OptionFooter />
        </Style.SelfModeOption>
      </Style.SelfModeSingleContainer>
    </>
  );
}
