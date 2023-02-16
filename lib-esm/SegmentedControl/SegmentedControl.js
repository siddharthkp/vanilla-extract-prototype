import * as React from 'react';
import { ul, fullWidth, li, seperator, button, content, hiddenBoldContent } from './SegmentedControl.css.js';
import { Stack } from '../Stack/Stack.js';

const SegmentedControlBase = ({ size = 'medium', onChange, fullWidth: fullWidth$1 = false, className, ...props }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const children = React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child))
            return null;
        return React.cloneElement(child, {
            selected: selectedIndex === index,
            onClick: (event) => {
                setSelectedIndex(index);
                if (typeof onChange === 'function')
                    onChange(index);
                if (typeof child.props.onClick === 'function')
                    child.props?.onClick(event);
            },
            _showSeperator: index === selectedIndex || // don't show after current selected item
                index + 1 === selectedIndex || // don't if next element is selected
                index === React.Children.count(props.children) - 1 // never show after last item
                ? false
                : true
        });
    });
    let fullWidthConfig = { narrow: false, regular: false, wide: false };
    if (typeof fullWidth$1 === 'boolean') {
        fullWidthConfig = { narrow: fullWidth$1, regular: fullWidth$1, wide: fullWidth$1 };
    }
    else if (typeof fullWidth$1 === 'object') {
        fullWidthConfig = { ...fullWidthConfig, ...fullWidth$1 };
    }
    return (React.createElement(Stack, { as: "ul", align: "center", className: [
            ul,
            fullWidthConfig.narrow ? fullWidth.narrow.true : fullWidth.narrow.false,
            fullWidthConfig.regular ? fullWidth.regular.true : fullWidth.regular.false,
            fullWidthConfig.wide ? fullWidth.wide.true : fullWidth.wide.false,
            className
        ]
            .filter(String)
            .join(' '), ...props }, children));
};
const SegmentedControlButton = ({ selected = false, leadingIcon: LeadingIcon, _showSeperator, children, ...props }) => (React.createElement("li", { "data-selected": Boolean(selected), className: [li, _showSeperator ? seperator : ''].join(' ') },
    React.createElement("button", { className: button, ...props },
        React.createElement(Stack, { as: "div", inline: true, align: "center", justify: "center", gap: "xsmall", className: content },
            LeadingIcon && React.createElement(LeadingIcon, null),
            children && React.createElement("span", null, children)),
        React.createElement(Stack, { as: "div", "aria-hidden": "true", align: "center", justify: "center", gap: "condensed", className: hiddenBoldContent },
            LeadingIcon && React.createElement(LeadingIcon, null),
            children && React.createElement("span", null, children)))));
const SegmentedControl = Object.assign(SegmentedControlBase, { Button: SegmentedControlButton });

export { SegmentedControl };
