import Icon from '@/components/common/Icon';
import { OptionDataT, OptionPackageT } from '../../SelfModeMain/SelfModeMain';
import * as S from './OptionHeader.style';
import { useLocation } from 'react-router-dom';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageState } from '@/contexts/CurrentPackageProvider';

interface Props {
  isActive: boolean;
  optionData: OptionDataT | OptionPackageT;
}

export default function OptionHeader({ isActive, optionData }: Props) {
  const { pathname } = useLocation();
  const { dataList } = useSelectOptionState();
  const { packageList } = useSelectPackageState();
  const { filterId } = useCurrentPackageState();
  const { selfModeStep } = useSelfModeContext();

  let rateText = '구매자의';
  if (pathname === '/guide-mode') {
    const recommendList =
      selfModeStep < 7 ? dataList[selfModeStep - 1].recommendList : packageList[filterId - 1].recommendList;
    if (recommendList === undefined) return;
    if (recommendList.some((id) => id === optionData.id)) rateText = '나와 비슷한';
  }

  return (
    <>
      <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
      <S.SalePercent $isActive={isActive}>{`${rateText} ${Math.floor(
        optionData.purchaseRate
      )}%가 선택했어요!`}</S.SalePercent>
    </>
  );
}
