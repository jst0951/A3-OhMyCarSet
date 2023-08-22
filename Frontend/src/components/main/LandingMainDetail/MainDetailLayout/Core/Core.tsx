import { useEffect, useState } from 'react';
import * as S from './Core.style';
import fetchData from '@/utils/apis/fetchData';

type CoreOption = Array<{
  trimId: number;
  trimName: string;
  coreOptionList: Array<{
    id: number;
    name: string;
    trimId: number;
    imgSrc: string;
  }>;
}>;

export default function Core() {
  const [coreOption, setCoreOption] = useState<CoreOption>([]);

  const fetchCoreOption = async () => {
    try {
      const coreOptionData = await fetchData('core_option');
      setCoreOption(coreOptionData);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchCoreOption();
  }, []);

  return (
    <>
      <S.CoreOptionContainer>
        {coreOption.map((trim) => (
          <S.CoreOptionItemLine key={trim.trimId}>
            {trim.coreOptionList.map((option) => (
              <S.CoreOptionItemContainer key={option.id}>
                <S.CoreOptionItemImg>
                  <img
                    src={`${import.meta.env.VITE_STATIC_API_URL}/${option.imgSrc}`}
                    alt={option.name}
                    width={60}
                    loading="lazy"
                  />
                </S.CoreOptionItemImg>
                <S.CoreOptionItemDescription>{option.name}</S.CoreOptionItemDescription>
              </S.CoreOptionItemContainer>
            ))}
          </S.CoreOptionItemLine>
        ))}
      </S.CoreOptionContainer>
    </>
  );
}
