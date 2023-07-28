import { HTMLMotionProps } from 'framer-motion';
import { type VariantProps } from 'tailwind-variants';

import { styles } from './styles';

export type KryInputProps = HTMLMotionProps<'input'> &
  VariantProps<typeof styles> & {
    invalid?: boolean;
    message?: string;
    ref?: (el: HTMLInputElement) => HTMLInputElement;
    label?: string;
    kryChange?: (value: string) => void;
  };
