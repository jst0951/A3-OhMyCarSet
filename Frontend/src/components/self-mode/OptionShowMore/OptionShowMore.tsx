import * as Style from './OptionShowMore.style';

interface OptionShowMoreProps {
  main: string;
  sub: string;
}

export default function OptionShowMore({ main, sub }: OptionShowMoreProps) {
  return (
    <>
      <Style.OptionShowMoreContainer>
        <Style.ShowMoreMainText>{main}</Style.ShowMoreMainText>
        <Style.ShowMoreSubText>{sub}</Style.ShowMoreSubText>
      </Style.OptionShowMoreContainer>
    </>
  );
}
