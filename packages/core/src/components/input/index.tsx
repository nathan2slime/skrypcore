import { Variants, motion } from 'framer-motion';
import { FC, forwardRef } from 'react';

import { KryInputProps } from './model';
import { styles } from './styles';
import { animations } from '../../animations';

export const KryInput = forwardRef<HTMLInputElement>(
  (
    {
      className,
      children,
      color,
      kryChange,
      label,
      message,
      invalid,
      value,
      ...props
    }: KryInputProps,
    ref,
  ) => {
    const style = styles({ className, invalid, color });

    return (
      <div className={style.container()}>
        {label && <label className={style.label()}>{label}</label>}
        <motion.input
          {...props}
          ref={ref}
          value={value || ''}
          onChange={e => kryChange && kryChange(e.target.value)}
          className={style.base({ className })}
        />
        {invalid && (
          <motion.span
            className={style.message()}
            variants={animations.input.message}
            initial="initial"
            animate="animate"
          >
            {message}
          </motion.span>
        )}{' '}
      </div>
    );
  },
) as FC<KryInputProps>;
