import React from 'react';
import RectFilterButtonBase from './RectFilterButton.style';

type buttonType = 'selected' | 'notselected';

type buttonPage = 'mainFilter' | 'selfFilter';

interface RectFilterButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: buttonType;
  page: buttonPage;
}

export type Props = Partial<RectFilterButtonProps>;

export default function RectFilterButton({ type = 'selected', page = 'mainFilter', onClick, children }: Props) {
  return (
    <RectFilterButtonBase type={type} page={page} onClick={onClick}>
      {children}
    </RectFilterButtonBase>
  );
}
