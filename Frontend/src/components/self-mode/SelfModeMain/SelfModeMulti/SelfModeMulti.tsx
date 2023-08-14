// import OptionFooter from '../OptionFooter/OptionFooter';
import { useEffect, useState } from 'react';
import * as S from './SelfModeMulti.style';
import fetchData from '@/apis/fetchData';
import { OptionPackageT } from '../SelfModeMain';
import OptionItem from '../../OptionItem/OptionItem';
import { useCurrentPackageDispatch, useCurrentPackageState } from '@/contexts/CurrentPackageProvider';

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
    key: 'external_device',
    text: '외부장치',
  },
  {
    key: 'internal_device',
    text: '내부장치',
  },
];

type OptionPackageListT = OptionPackageT[];

export default function SelfModeMulti() {
  const [selectedOption, setSelectedOption] = useState<Set<number>>(new Set());
  const [optionPackage, setOptionPackage] = useState<OptionPackageListT[]>([]);
  const { filterId, packageId, optionId } = useCurrentPackageState();
  const currentPackageDispatch = useCurrentPackageDispatch();

  const handleFilterOption = (idx: number) => {
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: idx + 1,
    });
  };

  const fetchOptionData = async (key: string) => {
    try {
      const response = await fetchData(`selective_option/option_package/${key}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error('Error fetching option data:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      const allData: OptionPackageListT[] = [];
      for (const option of optionList) {
        const response = await fetchOptionData(option.key);
        allData.push(response);
      }
      console.log(allData[0]);
      setOptionPackage(allData);
    } catch (error) {
      console.error('Error fetching data for all options:', error);
    }
  };

  const getPackageId = (filterId: number, selectedId: number) => {
    return filterId * 10 + selectedId;
  };

  const handleClickOption = (currentFilter: number, selectedId: number) => {
    const packageId = getPackageId(currentFilter, selectedId);
    if (selectedOption.has(packageId)) {
      setSelectedOption((prev) => {
        const newSet = new Set(prev);
        newSet.delete(packageId);
        return newSet;
      });
    } else {
      setSelectedOption((prev) => new Set([...prev, packageId]));
    }

    currentPackageDispatch({
      type: 'UPDATE_PACKAGE',
      payload: selectedId,
    });
    currentPackageDispatch({
      type: 'UPDATE_OPTION',
      payload: 1,
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <S.SelfModeMultiContainer>
        <S.SelfModeImage>
          {optionPackage[filterId - 1] && (
            <img
              src={`${import.meta.env.VITE_STATIC_API_URL}/${optionPackage[filterId - 1][packageId - 1]?.components[
                optionId - 1
              ]?.imgSrc}`}
              alt={
                optionPackage[filterId - 1][packageId - 1]?.components[optionId - 1]?.name ??
                optionPackage[filterId - 1][packageId - 1]?.name
              }
            />
          )}
        </S.SelfModeImage>
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
            {selectedOption.size !== 0 && <S.Count>선택 옵션 {selectedOption.size}</S.Count>}
          </S.TitleContainer>
          <S.OptionContainer>
            {optionPackage[filterId - 1] &&
              optionPackage[filterId - 1].map((data) => (
                <OptionItem
                  key={data.id}
                  optionData={data}
                  isActive={selectedOption.has(getPackageId(filterId, data.id))}
                  onClick={() => handleClickOption(filterId, data.id)}
                  showFeedback={0}
                />
              ))}
          </S.OptionContainer>
        </S.SelfModeOption>
      </S.SelfModeMultiContainer>
    </>
  );
}
