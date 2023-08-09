import * as Style from './InteriorColor.style';

type InteriorColor = Array<{
  trimId: number;
  trimName: string;
  iColorList: Array<{
    id: number;
    name: string;
    imgSrc: string;
  }>;
}>;

interface InteriorColorProps {
  interiorColor: InteriorColor;
}

export default function InteriorColor({ interiorColor }: InteriorColorProps) {
  return (
    <>
      <Style.LineTitle>내장 색상</Style.LineTitle>
      <Style.InteriorColorContainer>
        {interiorColor.map((line) => (
          <>
            <Style.InteriorColorItemLine>
              {line.iColorList.map((item) => (
                <>
                  <Style.InteriorColorItemContainer>
                    <Style.InteriorColorItem>
                      <img src={`${import.meta.env.VITE_STATIC_API_URL}/${item.imgSrc}`} />
                    </Style.InteriorColorItem>
                    <Style.InteriorColorItemDescription>{item.name}</Style.InteriorColorItemDescription>
                  </Style.InteriorColorItemContainer>
                </>
              ))}
            </Style.InteriorColorItemLine>
          </>
        ))}
      </Style.InteriorColorContainer>
    </>
  );
}
