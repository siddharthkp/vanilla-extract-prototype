import * as React from 'react';
import * as classNames from './Stack.css';

type StackProps<T extends React.ElementType> = React.PropsWithChildren<{
  inline?: boolean;
  direction?: 'horizontal' | 'vertical';
  justify?:
    | 'normal'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'flex-start'
    | 'flex-end';
  align?: 'normal' | 'center' | 'start' | 'end';
  gap?: 'none' | 'xsmall' | 'condensed' | 'normal' | 'spacious';
  as?: T;
}>;

export function Stack<T extends React.ElementType = 'button'>({
  as,
  inline = false,
  direction = 'horizontal',
  justify = 'normal',
  align = 'normal',
  gap = 'none',
  className,
  ...props
}: StackProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof StackProps<T>>) {
  const As = as || 'div';
  return (
    <As
      className={[
        inline ? classNames.inline : className.base,
        classNames.direction[direction],
        classNames.justify[justify],
        classNames.align[align],
        classNames.gap[gap],
        className
      ]
        .filter(String)
        .join(' ')}
      {...props}
    >
      {props.children}
    </As>
  );
}
