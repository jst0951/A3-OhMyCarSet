import { OptionData } from '@/components/self-mode/SelfModeMain/SelfModeMain';
import { DEFAULT_PRICE } from '@/constants';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';

export const getTotalPrice = (selectData: OptionData) => {
  const selectOptionState = useSelectOptionState();
  return selectData?.price + selectOptionState.reduce((total, option) => total + option.price, DEFAULT_PRICE);
};
