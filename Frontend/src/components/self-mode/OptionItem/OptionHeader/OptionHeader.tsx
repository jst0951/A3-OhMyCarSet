import Icon from '@/components/common/Icon';
import { OptionDataT, OptionPackageT } from '../../SelfModeMain/SelfModeMain';
import * as S from './OptionHeader.style';
import { useLocation } from 'react-router-dom';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageState } from '@/contexts/CurrentPackageProvider';
import { useEffect, useState } from 'react';

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
  const [isRecommended, setIsRecommended] = useState(false);

  useEffect(() => {
    if (pathname === '/guide-mode') {
      const recommendList =
        selfModeStep < 7 ? dataList[selfModeStep - 1].recommendList : packageList[filterId - 1].recommendList;
      if (recommendList === undefined) return;
      if (recommendList.some((id) => id === optionData.id)) setIsRecommended(true);
    }
  }, []);

  return (
    <>
      <S.IconContainer>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        {isRecommended && (
          <S.TagContainer>
            <S.Tag>20대 61%</S.Tag>
            <S.Tag>여성 65%</S.Tag>
          </S.TagContainer>
        )}
      </S.IconContainer>
      <S.SalePercent $isActive={isActive}>{`${isRecommended ? '나와 비슷한' : '구매자의'} ${Math.floor(
        optionData.purchaseRate
      )}%가 선택했어요!`}</S.SalePercent>
    </>
  );
}
