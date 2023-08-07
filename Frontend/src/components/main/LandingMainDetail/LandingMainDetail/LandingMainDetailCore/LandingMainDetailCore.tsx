import * as Style from './LandingMainDetailCore.style';

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

export interface CoreOptionProps {
  coreOption: CoreOption;
}

export default function LandingMainDetailCore({ coreOption }: CoreOptionProps) {
  return (
    <>
      <Style.MainDetailLineTitle>핵심 옵션</Style.MainDetailLineTitle>
      <Style.MainDetailCoreOptionContainer>
        <Style.MainDetailCoreOptionItemContainer>
          <Style.MainDetailCoreOptionItemLine>
            <Style.MainDetailCoreOptionItemImg></Style.MainDetailCoreOptionItemImg>
          </Style.MainDetailCoreOptionItemLine>
        </Style.MainDetailCoreOptionItemContainer>
      </Style.MainDetailCoreOptionContainer>
    </>
  );
}
