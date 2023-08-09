import { useEffect, useState } from 'react';
import * as Style from './InteriorColor.style';
import fetchData from '@/apis/fetchData';

type InteriorColor = Array<{
  trimId: number;
  trimName: string;
  iColorList: Array<{
    id: number;
    name: string;
    imgSrc: string;
  }>;
}>;

export default function InteriorColor() {
  const [interiorColor, setInteriorColor] = useState<InteriorColor>([]);

  const fetchInteriorColor = async () => {
    try {
      const interiorColorData = await fetchData('interior_color');
      setInteriorColor(interiorColorData);
    } catch (error) {
      console.error('Error fetching core option data:', error);
    }
  };

  useEffect(() => {
    fetchInteriorColor();
  }, []);

  return (
    <>
      <Style.LineTitle>내장 색상</Style.LineTitle>
      <Style.InteriorColorContainer>
        {interiorColor.map((line) => (
          <Style.InteriorColorItemLine key={line.trimId}>
            {line.iColorList.map((item) => (
              <Style.InteriorColorItemContainer key={item.id}>
                <Style.InteriorColorItem>
                  <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} />
                </Style.InteriorColorItem>
                <Style.InteriorColorItemDescription>{item.name}</Style.InteriorColorItemDescription>
              </Style.InteriorColorItemContainer>
            ))}
          </Style.InteriorColorItemLine>
        ))}
      </Style.InteriorColorContainer>
    </>
  );
}
