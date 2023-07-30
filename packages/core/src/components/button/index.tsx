import { motion, useAnimation } from 'framer-motion';
import { MouseEvent, MouseEventHandler, useState } from 'react';

import { KryButtonProps } from './model';
import { styles } from './styles';
import { bindClass } from '../../utils/class';
import { animations } from '../../animations';

export const KryButton = ({
  className,
  children,
  rounded,
  disabled,
  color,
  onClick,
  variant,
  ...props
}: KryButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();

  const kryClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    onClick && onClick(e);

    setClicked(true);
    controls.start('click');

    setTimeout(() => setClicked(false), 500);
  };

  return (
    <motion.button
      {...props}
      data-testid="button"
      className={bindClass(
        { className, rounded, disabled, variant, color },
        styles,
      )}
      animate={clicked ? 'click' : 'initial'}
      variants={animations.button.click}
      onClick={kryClick}
    >
      {children}
    </motion.button>
  );
};
