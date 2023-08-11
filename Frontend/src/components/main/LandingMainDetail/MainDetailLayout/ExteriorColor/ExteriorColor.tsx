import { useEffect, useState } from 'react';
import * as S from './ExteriorColor.style';
import fetchData from '@/apis/fetchData';

type ExteriorColor = Array<{
  trimId: number;
  trimName: string;
  eColorList: Array<{
    id: number;
    name: string;
    colorCode: string;
    imgSrc: string;
  }>;
}>;

export default function ExteriorColor() {
  const [exteriorColor, setExteriorColor] = useState<ExteriorColor>([]);

  const fetchExteriorColor = async () => {
    try {
      const coreOptionData = await fetchData('exterior_color');
      setExteriorColor(coreOptionData);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchExteriorColor();
  }, []);

  return (
    <>
      <S.ExteriorColorContainer>
        {exteriorColor.map((line) => (
          <S.ExteriorColorItemLine key={line.trimId}>
            {line.eColorList.map((item, index) => (
              <S.ExteriorColorItemContainer key={item.id}>
                <S.ExteriorColorItem $border={index === 0} $bgColor={item.colorCode}></S.ExteriorColorItem>
                <S.ExteriorColorItemDescription>{item.name}</S.ExteriorColorItemDescription>
              </S.ExteriorColorItemContainer>
            ))}
          </S.ExteriorColorItemLine>
        ))}
      </S.ExteriorColorContainer>
    </>
  );
}
