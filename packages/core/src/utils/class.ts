import classNames from 'classnames';

export type Props = {
  [key: string]: string | boolean | undefined;
};

export type Styles = {
  (v: object): string;
  defaultVariants: Props;
};

export const bindClass = (props: Props, styles: Styles) => {
  const data: Props = {};

  Object.keys(props).forEach(key => {
    const value = props[key] || styles.defaultVariants[key];

    const hash: Props = {
      boolean: !!value ?? key,
      string: value,
    };

    const res = hash[typeof value];

    if (res) data[key] = res;
  });

  return classNames(styles(props), data);
};
