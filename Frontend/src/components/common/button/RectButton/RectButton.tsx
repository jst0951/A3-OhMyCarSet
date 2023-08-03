import React from 'react';

type buttonType = 'recommended' | 'notrecommended' | 'etc';

type buttonPage = 'main' | 'self' | 'guide' | 'final' | 'ready' | 'modal';

interface RectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: buttonType;
  page: buttonPage;
}

export type Props = Partial<RectButtonProps>;
