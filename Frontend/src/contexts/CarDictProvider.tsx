import fetchData from '@/utils/apis/fetchData';
import { createContext, useContext, useState } from 'react';

interface CarDictData {
  id: number;
  keyword: string;
  description: string;
  imgSrc: string;
}

interface CarDictContextProps {
  carDict: CarDictData[];
}

const CarDictContext = createContext<CarDictContextProps | undefined>(undefined);

export const useCarDictContext = () => {
  const context = useContext(CarDictContext);
  if (!context) {
    throw new Error('Cannot find CarDictProvider');
  }
  return context;
};

interface CarDictProviderProps {
  children: React.ReactNode;
}

export default function CarDictProvider({ children }: CarDictProviderProps) {
  const [carDict, setCarDict] = useState([]);

  const fetchCarDict = async () => {
    try {
      const coreOptionData = await fetchData('car_dict');
      setCarDict(coreOptionData);
    } catch (error) {
      console.error('Error fetching car dictionary data:', error);
    }
  };
  fetchCarDict();

  const contextValue: CarDictContextProps = {
    carDict,
  };

  return <CarDictContext.Provider value={contextValue}>{children}</CarDictContext.Provider>;
}
