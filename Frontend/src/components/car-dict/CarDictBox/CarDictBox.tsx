import Icon from '../../common/Icon';
import * as S from './CarDictBox.style';
import { useCarDictDispatch, useCarDictState } from '@/contexts/CarDictProvider';

interface Props {
  children: React.ReactNode;
}

export default function CarDictBox({ children }: Props) {
  const { dataList, dictionaryOn } = useCarDictState();
  const CarDictDispatch = useCarDictDispatch();

  const handleClick = () => {
    CarDictDispatch({ type: 'CLICK_WORD', payload: { keyword: children?.toString() } });
  };

  const checkInDict = () => {
    if (children) {
      const targetName = children.toString();
      return dataList.some((item) => item.keyword === targetName);
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
