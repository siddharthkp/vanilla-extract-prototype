import * as React from 'react';
import * as classNames from './Button.css';

/**
 * Primary UI component for user interaction
 */
export type ButtonProps = React.PropsWithChildren<{
  variant?: 'default' | 'primary' | 'danger' | 'invisible' | 'outline';
  size?: 'small' | 'medium' | 'large';
  leadingIcon?: React.ComponentType | null | undefined;
  trailingIcon?: React.ComponentType | null | undefined;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[classNames.base, classNames.variants.appearance[variant], classNames.variants.size[size], className]
        .filter(String)
        .join(' ')}
      {...props}
    >
      <span className={classNames.leadingIcon}>{LeadingIcon && <LeadingIcon />}</span>
      {props.children}
      <span className={classNames.trailingIcon}>{TrailingIcon && <TrailingIcon />}</span>
    </button>
  );
};

const Counter: React.FC<React.PropsWithChildren> = (props) => {
  return <span className={classNames.counter} {...props} />;
};

export const Button = Object.assign(ButtonComponent, { Counter });
