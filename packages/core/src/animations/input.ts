import { Variants } from 'framer-motion';

const message: Variants = {
  initial: {
    opacity: 0,
    translateY: 40,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
  exit: {
    opacity: 0,
    translateY: 40,
  },
};

export const input = {
  message,
};
