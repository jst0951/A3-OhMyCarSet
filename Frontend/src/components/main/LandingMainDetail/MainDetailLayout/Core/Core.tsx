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
        <Style.CoreOptionItemLine>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[0].coreOptionList[0].imgSrc}`}
                alt={coreOption[0].coreOptionList[0].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[0].coreOptionList[0].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[0].coreOptionList[1].imgSrc}`}
                alt={coreOption[0].coreOptionList[1].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[0].coreOptionList[1].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[0].coreOptionList[2].imgSrc}`}
                alt={coreOption[0].coreOptionList[2].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[0].coreOptionList[2].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
        </Style.CoreOptionItemLine>
        <Style.CoreOptionItemLine>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[1].coreOptionList[0].imgSrc}`}
                alt={coreOption[1].coreOptionList[0].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[0].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[1].coreOptionList[1].imgSrc}`}
                alt={coreOption[1].coreOptionList[1].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[1].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[1].coreOptionList[2].imgSrc}`}
                alt={coreOption[1].coreOptionList[2].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[2].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
        </Style.CoreOptionItemLine>
        <Style.CoreOptionItemLine>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[2].coreOptionList[0].imgSrc}`}
                alt={coreOption[1].coreOptionList[0].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[0].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[2].coreOptionList[1].imgSrc}`}
                alt={coreOption[1].coreOptionList[1].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[1].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[2].coreOptionList[2].imgSrc}`}
                alt={coreOption[1].coreOptionList[2].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[1].coreOptionList[2].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
        </Style.CoreOptionItemLine>
        <Style.CoreOptionItemLine>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[3].coreOptionList[0].imgSrc}`}
                alt={coreOption[2].coreOptionList[0].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[2].coreOptionList[0].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[3].coreOptionList[1].imgSrc}`}
                alt={coreOption[3].coreOptionList[1].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[3].coreOptionList[1].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
          <Style.CoreOptionItemContainer>
            <Style.CoreOptionItemImg>
              <img
                src={`${import.meta.env.VITE_STATIC_API_URL}/${coreOption[3].coreOptionList[2].imgSrc}`}
                alt={coreOption[3].coreOptionList[2].name}
                width={60}
              />
            </Style.CoreOptionItemImg>
            <Style.CoreOptionItemDescription>{coreOption[3].coreOptionList[2].name}</Style.CoreOptionItemDescription>
          </Style.CoreOptionItemContainer>
        </Style.CoreOptionItemLine>
      </Style.CoreOptionContainer>
    </>
  );
}
