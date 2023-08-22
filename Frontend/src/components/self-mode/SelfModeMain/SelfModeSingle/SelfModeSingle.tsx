import { useEffect, useState } from 'react';
import OptionFooter from '../OptionFooter/OptionFooter';
import * as S from './SelfModeSingle.style';
import fetchData from '@/utils/apis/fetchData';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { OptionDataT } from '../SelfModeMain';
import OptionItem from '../../OptionItem/OptionItem';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import CarDictBox from '@/components/car-dict/CarDictBox/CarDictBox';
import { DEFAULT_PRICE, SELF_MODE_URL, categoryNameList, optionPackageList } from '@/constants';
import { useLocation } from 'react-router-dom';
import fetchPost from '@/utils/apis/fetchPost';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { cacheSelfOptionPackage } from '@/utils/cache/cacheSelfOptionPackage';

type CacheDataT = {
  id: number;
  dataList: OptionDataT[];
};

export default function SelfModeSingle() {
  const { pathname } = useLocation();
  const { selfModeStep } = useSelfModeContext();
  const selectOptionState = useSelectOptionState();

  const [cacheData, setCacheData] = useState<CacheDataT>();
  const [hovered, setHovered] = useState(false);
  const [stepData, setStepData] = useState<OptionDataT[]>([]);
  const [tempTotal, setTempTotal] = useState<number>(DEFAULT_PRICE);
  const [prevTotal, setPrevTotal] = useState<number>(DEFAULT_PRICE);
  const [selectedOption, setSelectedOption] = useState<OptionDataT>();
  const [showFeedback, setShowFeedback] = useState<number>(0);
  const { selectTag } = useSelectTagContext();
  const selectPackageState = useSelectPackageState();

  const fetchDataByMode = async (idx: number) => {
    const endpoint = `selective_option/required_option/${categoryNameList[idx].key}`;
    if (pathname === SELF_MODE_URL) {
      return await fetchData(endpoint);
    } else {
      return await fetchPost(endpoint, {
        ...selectTag,
        recommendOptionId: selectOptionState.dataList[idx].recommendList,
      });
    }
  };

  const fetchStepData = async () => {
    try {
      const response = cacheData?.id === selfModeStep ? cacheData.dataList : await fetchDataByMode(selfModeStep - 1);
      setStepData(response);
      // 옵션 초기화
      if (selectOptionState.dataList[selfModeStep - 1].selectedId !== 0) {
        setSelectedOption(
          response.find((data: OptionDataT) => data.id === selectOptionState.dataList[selfModeStep - 1].selectedId)
        );
        setTempTotal(selectOptionState.totalPrice + selectPackageState.totalPrice);
        setPrevTotal(selectOptionState.totalPrice + selectPackageState.totalPrice);
      } else {
        setSelectedOption(response[0]);
        setTempTotal(selectOptionState.totalPrice + response[0].price + selectPackageState.totalPrice);
        setPrevTotal(selectOptionState.totalPrice + response[0].price + selectPackageState.totalPrice);
      }
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  const cacheStepData = async () => {
    try {
      const response = await fetchDataByMode(selfModeStep);
      setCacheData({ id: selfModeStep + 1, dataList: response });
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  const handleClickOption = (selectedOption: OptionDataT) => {
    setSelectedOption(selectedOption);
  };

  const cacheGuideOptionPackage = async () => {
    const urls = optionPackageList.map((data) => {
      return `${import.meta.env.VITE_API_URL}/selective_option/option_package/${data.key}`;
    });

    const cache = await caches.open('optionPackage');

    for (const [idx, url] of urls.entries()) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...selectTag,
          recommendOptionId: selectPackageState.packageList[idx].recommendList,
        }),
      });

      if (response.ok) {
        await cache.put(url, response.clone());
      } else {
        console.error(`Failed to fetch response for ${url}`);
      }
    }
  };

  const cacheAfterHover = async () => {
    if (selfModeStep < 6) await cacheStepData();
    else if (selfModeStep === 6) {
      const hasCache = await caches.has('optionPackage');
      if (!hasCache) {
        pathname === SELF_MODE_URL ? await cacheSelfOptionPackage() : await cacheGuideOptionPackage();
      }
    }
  };

  useEffect(() => {
    if (!hovered) return;
    cacheAfterHover();
  }, [hovered]);

  useEffect(() => {
    fetchStepData();
  }, [selfModeStep]);

  useEffect(() => {
    setPrevTotal(tempTotal + selectPackageState.totalPrice);

    if (selectOptionState.dataList[selfModeStep - 1].selectedId !== 0) {
      setTempTotal(
        selectOptionState.totalPrice -
          selectOptionState.dataList[selfModeStep - 1].price +
          (selectedOption?.price || 0) +
          selectPackageState.totalPrice
      );
    } else {
      setTempTotal(selectOptionState.totalPrice + (selectedOption?.price || 0) + selectPackageState.totalPrice);
    }
  }, [selectedOption]);

  return (
    <>
      <S.SelfModeSingleContainer>
        <S.SelfModeImage>
          {selectedOption && (
            <img src={`${import.meta.env.VITE_STATIC_API_URL}/${selectedOption?.imgSrc}`} alt={selectedOption?.name} />
          )}
        </S.SelfModeImage>
        <S.SelfModeOption>
          <S.TitleContainer>
            <S.Title>
              <CarDictBox>{categoryNameList[selfModeStep - 1].text}</CarDictBox>
            </S.Title>
            <S.TitleText>을 선택해주세요.</S.TitleText>
          </S.TitleContainer>
          <S.OptionContainer>
            {stepData.map((data) => (
              <OptionItem
                key={data.id}
                optionData={data}
                isActive={selectedOption?.id === data.id}
                onClick={() => handleClickOption(data)}
                showFeedback={showFeedback}
              />
            ))}
          </S.OptionContainer>
          <OptionFooter
            hovered={hovered}
            setHovered={setHovered}
            selectedData={selectedOption}
            prevTotal={prevTotal}
            tempTotal={tempTotal}
            setShowFeedback={setShowFeedback}
          />
        </S.SelfModeOption>
      </S.SelfModeSingleContainer>
    </>
  );
}
