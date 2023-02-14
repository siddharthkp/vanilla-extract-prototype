import * as React from 'react';
/**
 * Primary UI component for user interaction
 */
export type ButtonProps = React.PropsWithChildren<{
    variant?: 'default' | 'primary' | 'danger' | 'invisible' | 'outline';
    size?: 'small' | 'medium' | 'large';
    leadingIcon?: React.ComponentType | null | undefined;
    trailingIcon?: React.ComponentType | null | undefined;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: React.FC<ButtonProps> & {
    Counter: React.FC<{
        children?: React.ReactNode;
    }>;
};
