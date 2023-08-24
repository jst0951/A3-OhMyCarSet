import React from 'react';
import Header from '../header';
import CarDictModal from '../car-dict/CarDictModal/CarDictModal';
import ModalContainer from '../modal/ModalContainer';
import CarDictIntroModal from '../modal/CarDictIntroModal/CarDictIntroModal';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <CarDictModal />
      <CarDictIntroModal />
      <ModalContainer />
      {children}
    </>
  );
}
