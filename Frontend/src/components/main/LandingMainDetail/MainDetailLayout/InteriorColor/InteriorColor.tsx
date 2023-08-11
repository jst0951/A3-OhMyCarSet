import { useEffect, useState } from 'react';
import * as S from './InteriorColor.style';
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
      <S.InteriorColorContainer>
        {interiorColor.map((line) => (
          <S.InteriorColorItemLine key={line.trimId}>
            {line.iColorList.map((item) => (
              <S.InteriorColorItemContainer key={item.id}>
                <S.InteriorColorItem>
                  <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} />
                </S.InteriorColorItem>
                <S.InteriorColorItemDescription>{item.name}</S.InteriorColorItemDescription>
              </S.InteriorColorItemContainer>
            ))}
          </S.InteriorColorItemLine>
        ))}
      </S.InteriorColorContainer>
    </>
  );
}
