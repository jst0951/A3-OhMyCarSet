import { useEffect, useState } from 'react';
import * as Style from './Core.style';
import fetchData from '@/apis/fetchData';

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
      <Style.CoreOptionContainer>
        {coreOption.map((trim) => (
          <Style.CoreOptionItemLine key={trim.trimId}>
            {trim.coreOptionList.map((option) => (
              <Style.CoreOptionItemContainer key={option.id}>
                <Style.CoreOptionItemImg>
                  <img src={`${import.meta.env.VITE_STATIC_API_URL}/${option.imgSrc}`} alt={option.name} width={60} />
                </Style.CoreOptionItemImg>
                <Style.CoreOptionItemDescription>{option.name}</Style.CoreOptionItemDescription>
              </Style.CoreOptionItemContainer>
            ))}
          </Style.CoreOptionItemLine>
        ))}
      </Style.CoreOptionContainer>
    </>
  );
}
