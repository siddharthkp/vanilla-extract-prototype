import '../node_modules/react/index.js';
import { base, variants, leadingIcon, trailingIcon, counter } from './Button.css.js';
import { exports as reactExports } from '../_virtual/index.js';

const ButtonComponent = ({ variant = 'default', size = 'medium', leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, className, ...props }) => {
    return (reactExports.createElement("button", { type: "button", className: [base, variants.appearance[variant], variants.size[size], className]
            .filter(String)
            .join(' '), ...props },
        reactExports.createElement("span", { className: leadingIcon }, LeadingIcon && reactExports.createElement(LeadingIcon, null)),
        props.children,
        reactExports.createElement("span", { className: trailingIcon }, TrailingIcon && reactExports.createElement(TrailingIcon, null))));
};
const Counter = (props) => {
    return reactExports.createElement("span", { className: counter, ...props });
};
const Button = Object.assign(ButtonComponent, { Counter });

export { Button };
