import * as Style from './Estimate.style';

interface EstimateProps {
  show: boolean;
}

export default function Estimate({ show }: EstimateProps) {
  return (
    <>
      <Style.EstimateContainer $show={show}></Style.EstimateContainer>
    </>
  );
}
