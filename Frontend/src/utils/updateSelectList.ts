import { OptionData } from '@/components/self-mode/SelfModeMain/SelfModeMain';
import { SelectOptionData } from '@/contexts/SelectOptionProvider';

interface Props {
  prevData: SelectOptionData[];
  currentStep: number;
  selectedData: OptionData;
}

export const updateSelectList = ({ prevData, currentStep, selectedData }: Props) => {
  return prevData.map((option, idx) => {
    if (idx + 1 === currentStep) {
      return {
        ...option,
        selectedName: selectedData.name,
        price: selectedData.price,
        imgSrc: selectedData.imgSrc,
      };
    }
    return option;
  });
};
