import * as icons from '@/asset/icons';
import { colors } from '@/style/theme';

const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = colors.coolGreyBlack;

type IconType = keyof typeof icons;

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

export default function Icon({ icon, size = DEFAULT_SIZE, color = DEFAULT_COLOR }: IconProps) {
  const Icon = icons[icon];
  return <Icon fill={color} width={size} height={size} />;
}
