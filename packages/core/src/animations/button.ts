import { Variants } from 'framer-motion';

export const click: Variants = {
  initial: {
    scale: 1,
  },
  click: {
    scale: [1, 1.05, 0.8, 1.09, 0.9, 1],
  },
};

export const button = {
  click,
};
