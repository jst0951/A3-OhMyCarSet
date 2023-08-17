import { useDictionaryOnContext } from '@/contexts/DictionaryOnProvider';
import Icon from '../common/Icon';
import * as S from './CarDictBox.style';
import { useCarDictContext } from '@/contexts/CarDictProvider';

interface Props {
  children: React.ReactNode;
}

export default function CarDictBox({ children }: Props) {
  const { dictionaryOn } = useDictionaryOnContext();
  const { carDict } = useCarDictContext();

  const handleClick = () => {
    console.log(children?.toString());
  };

  const checkInDict = () => {
    if (children) {
      const targetName = children.toString();
      return carDict.some((item) => item.keyword === targetName);
    }

    return false;
  };

  return (
    <>
      {dictionaryOn && checkInDict() ? (
        <S.CarDictBoxContainer onClick={handleClick}>
          <S.DictIcon>
            <Icon icon="DictionaryOnIcon" color="#000000" />
          </S.DictIcon>
          {children}
        </S.CarDictBoxContainer>
      ) : (
        children
      )}
    </>
  );
}
