import GuideModeIndicator from './GuideModeIndicator/GuideModeIndicator';
import * as Style from './GuideModeMain.style';

export default function GuideModeMain() {
  return (
    <>
      <Style.GuideModeMainContainer>
        <GuideModeIndicator />
      </Style.GuideModeMainContainer>
    </>
  );
}
