import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'h-10 w-full rounded-md transition-all duration-300 border border-solid p-2 px-3 text-sm tracking-wide outline-none bg-dark-800 text-light-500  border-dark-900',
  variants: {
    invalid: {
      true: 'border-danger-400',
    },
    color: {
      primary: 'focus:border-primary-400',
      secondary: 'focus:border-secondary-400',
    },
  },
  slots: {
    container: 'flex relative flex-col overflow-hidden',
    message: 'mt-1 block text-[12px] tracking-wide text-warning-400',
    label:
      'mb-1 block text-[13px] tracking-wide text-slate-600 dark:text-primary-110',
  },

  compoundVariants: [
    {
      invalid: true,
      color: 'secondary',
      class: 'focus:border-warning-400',
    },
    {
      invalid: true,
      color: 'primary',
      class: 'focus:border-warning-400',
    },
  ],
});
