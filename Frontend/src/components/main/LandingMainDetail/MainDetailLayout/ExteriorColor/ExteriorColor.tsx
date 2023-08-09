import * as Style from './ExteriorColor.style';

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

interface ExteriorColorProps {
  exteriorColor: ExteriorColor;
}

export default function ExteriorColor({ exteriorColor }: ExteriorColorProps) {
  return (
    <>
      <Style.LineTitle>외장 색상</Style.LineTitle>
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
