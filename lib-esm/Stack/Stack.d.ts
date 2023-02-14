import * as React from 'react';
type StackProps<T extends React.ElementType> = React.PropsWithChildren<{
    inline?: boolean;
    direction?: 'horizontal' | 'vertical';
    justify?: 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'flex-start' | 'flex-end';
    align?: 'normal' | 'center' | 'start' | 'end';
    gap?: 'none' | 'xsmall' | 'condensed' | 'normal' | 'spacious';
    as?: T;
}>;
export declare function Stack<T extends React.ElementType = 'button'>({ as, inline, direction, justify, align, gap, className, ...props }: StackProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof StackProps<T>>): JSX.Element;
export {};
