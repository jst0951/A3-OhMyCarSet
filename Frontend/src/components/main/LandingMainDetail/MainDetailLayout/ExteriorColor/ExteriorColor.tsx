import { useEffect, useState } from 'react';
import * as Style from './ExteriorColor.style';
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
      <Style.ExteriorColorContainer>
        {exteriorColor.map((line) => (
          <Style.ExteriorColorItemLine key={line.trimId}>
            {line.eColorList.map((item, index) => (
              <Style.ExteriorColorItemContainer key={item.id}>
                <Style.ExteriorColorItem $border={index === 0} $bgColor={item.colorCode}></Style.ExteriorColorItem>
                <Style.ExteriorColorItemDescription>{item.name}</Style.ExteriorColorItemDescription>
              </Style.ExteriorColorItemContainer>
            ))}
          </Style.ExteriorColorItemLine>
        ))}
      </Style.ExteriorColorContainer>
    </>
  );
}
