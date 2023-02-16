import * as React from 'react';
import { base, variants, leadingIcon, trailingIcon, counter } from './Button.css.js';

const ButtonComponent = ({ variant = 'default', size = 'medium', leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, className, ...props }) => {
    return (React.createElement("button", { type: "button", className: [base, variants.appearance[variant], variants.size[size], className]
            .filter(String)
            .join(' '), ...props },
        React.createElement("span", { className: leadingIcon }, LeadingIcon && React.createElement(LeadingIcon, null)),
        props.children,
        React.createElement("span", { className: trailingIcon }, TrailingIcon && React.createElement(TrailingIcon, null))));
};
const Counter = (props) => {
    return React.createElement("span", { className: counter, ...props });
};
const Button = Object.assign(ButtonComponent, { Counter });

export { Button };
