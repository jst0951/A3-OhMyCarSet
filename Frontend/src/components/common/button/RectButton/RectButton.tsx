import React from 'react';
import RectButtonBase from './RectButton.style';

type buttonType = 'recommended' | 'notrecommended' | 'etc';

type buttonPage = 'main' | 'self' | 'guide' | 'final' | 'ready' | 'modal';

interface RectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: buttonType;
  page: buttonPage;
}

export type Props = Partial<RectButtonProps>;

export default function RectButton({ type = 'recommended', page = 'main', onClick, children }: Props) {
  return (
    <RectButtonBase type={type} page={page} onClick={onClick}>
      {children}
    </RectButtonBase>
  );
}
