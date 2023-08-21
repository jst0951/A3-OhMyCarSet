import React from 'react';
import Header from '../header';
import CarDictModal from '../car-dict/CarDictModal/CarDictModal';
import ModalContainer from '../modal/ModalContainer';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <CarDictModal />
      <ModalContainer />
      {children}
    </>
  );
}
