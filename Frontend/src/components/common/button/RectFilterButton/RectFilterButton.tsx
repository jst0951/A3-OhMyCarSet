import React from 'react';

type buttonType = 'selected' | 'notselected';

type buttonPage = 'mainFilter' | 'selfFilter';

interface RectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: buttonType;
  page: buttonPage;
}

export type Props = Partial<RectButtonProps>;
