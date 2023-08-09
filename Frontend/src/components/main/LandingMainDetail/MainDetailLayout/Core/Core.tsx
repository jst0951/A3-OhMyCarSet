import * as Style from './Core.style';

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

interface CoreOptionProps {
  coreOption: CoreOption;
}

export default function Core({ coreOption }: CoreOptionProps) {
  return (
    <>
      <Style.LineTitle>핵심 옵션</Style.LineTitle>
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
