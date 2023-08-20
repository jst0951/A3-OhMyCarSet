import OptionFooter from '../OptionFooter/OptionFooter';
import { useEffect, useState } from 'react';
import * as S from './SelfModeMulti.style';
import fetchData from '@/utils/apis/fetchData';
import { OptionPackageT } from '../SelfModeMain';
import OptionItem from '../../OptionItem/OptionItem';
import { useCurrentPackageDispatch, useCurrentPackageState } from '@/contexts/CurrentPackageProvider';
import { useSelectPackageDispatch, useSelectPackageState } from '@/contexts/SelectPackageProvider';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { useLocation } from 'react-router-dom';
import fetchPost from '@/utils/apis/fetchPost';
import { useSelectTagContext } from '@/contexts/SelectTagProvide';

const optionList = [
  {
    idx: 0,
    key: 'system',
    text: '시스템',
  },
  {
    idx: 1,
    key: 'temperature',
    text: '온도관리',
  },
  {
    idx: 2,
    key: 'external_device',
    text: '외부장치',
  },
  {
    idx: 3,
    key: 'internal_device',
    text: '내부장치',
  },
];

type OptionPackageListT = OptionPackageT[];

export default function SelfModeMulti() {
  const { pathname } = useLocation();
  const [optionPackage, setOptionPackage] = useState<OptionPackageListT[]>([]);
  const { filterId, packageId, optionId } = useCurrentPackageState();
  const { packageList, totalCount, totalPrice } = useSelectPackageState();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const selectPackageState = useSelectPackageState();
  const selectOptionState = useSelectOptionState();
  const [tempTotal, setTempTotal] = useState<number>(selectOptionState.totalPrice);
  const [prevTotal, setPrevTotal] = useState<number>(selectOptionState.totalPrice);
  const [imgSrc, setImgSrc] = useState('');
  const { selectTag } = useSelectTagContext();

  const handleFilterOption = (idx: number) => {
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: idx + 1,
    });
  };

  const fetchDataByMode = async (key: string, idx: number) => {
    const endpoint = `selective_option/option_package/${key}`;
    if (pathname === '/self-mode') {
      return await fetchData(endpoint);
    } else {
      return await fetchPost(endpoint, {
        ...selectTag,
        recommendOptionId: selectPackageState.packageList[idx].recommendList,
      });
    }
  };

  const fetchOptionData = async (key: string, idx: number) => {
    try {
      const response = await fetchDataByMode(key, idx);

      return response;
    } catch (error) {
      console.error('Error fetching option data:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      const allData: OptionPackageListT[] = [];
      for (const option of optionList) {
        const response = await fetchOptionData(option.key, option.idx);
        allData.push(response);
      }
      setOptionPackage(allData);
      setImgSrc(allData[0][0].components[0].imgSrc);
    } catch (error) {
      console.error('Error fetching data for all options:', error);
    }
  };

  const handleClickOption = (currentFilter: number, selectedData: OptionPackageT) => {
    selectPackageDispatch({
      type: 'UPDATE_LIST',
      payload: {
        filterId: currentFilter,
        newData: {
          id: selectedData.id,
          name: selectedData.name,
          price: selectedData.price,
          imgSrc: selectedData.components[0].imgSrc,
        },
      },
    });

    currentPackageDispatch({
      type: 'UPDATE_PACKAGE',
      payload: selectedData.id,
    });
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: selectedData.components[0].id,
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    setPrevTotal(tempTotal);
    setTempTotal(selectOptionState.totalPrice + totalPrice);
  }, [totalCount]);

  useEffect(() => {
    if (optionPackage.length !== 0) {
      setImgSrc(optionPackage[filterId - 1][0]?.components[0]?.imgSrc);
    }
  }, [filterId]);

  useEffect(() => {
    if (packageId === 0) return;
    const filterData = optionPackage[filterId - 1];
    const packageData = filterData?.find((data) => data.id === packageId)?.components;
    const optionData = packageData?.find((option) => option.id === optionId);
    if (optionData) {
      setImgSrc(optionData.imgSrc);
    } else {
      if (!packageData) return;
      setImgSrc(packageData[0].imgSrc);
    }
  }, [packageId, optionId]);

  return (
    <>
      <S.SelfModeMultiContainer>
        <S.SelfModeImage>{imgSrc && <img src={`${import.meta.env.VITE_STATIC_API_URL}/${imgSrc}`} />}</S.SelfModeImage>
        <S.SelfModeOption>
          <S.FilterContainer>
            {optionList.map((option, idx) => (
              <S.FilterButton key={idx} $active={filterId === idx + 1} onClick={() => handleFilterOption(idx)}>
                {option.text}
              </S.FilterButton>
            ))}
          </S.FilterContainer>
          <S.TitleContainer>
            <S.Title>옵션</S.Title>
            <S.TitleText>을 선택해주세요.</S.TitleText>
            {totalCount !== 0 && <S.Count>선택 옵션 {totalCount}</S.Count>}
          </S.TitleContainer>
          <S.OptionContainer>
            {optionPackage[filterId - 1] &&
              optionPackage[filterId - 1].map((data) => (
                <OptionItem
                  key={data.id}
                  optionData={data}
                  isActive={packageList[filterId - 1].selectedList.has(data.id)}
                  onClick={() => handleClickOption(filterId, data)}
                  showFeedback={0}
                />
              ))}
          </S.OptionContainer>
          <OptionFooter prevTotal={prevTotal} tempTotal={tempTotal} />
        </S.SelfModeOption>
      </S.SelfModeMultiContainer>
    </>
  );
}
