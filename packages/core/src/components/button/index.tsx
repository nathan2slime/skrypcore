import { motion } from 'framer-motion';

import { KryButtonProps } from './model';
import { styles } from './styles';
import { bindClass } from '../../utils/class';

export const KryButton = ({
  className,
  children,
  rounded,
  disabled,
  color,
  variant,
  ...props
}: KryButtonProps) => (
  <motion.button
    {...props}
    data-testid="button"
    className={bindClass(
      { className, rounded, disabled, variant, color },
      styles,
    )}
  >
    {children}
  </motion.button>
);
