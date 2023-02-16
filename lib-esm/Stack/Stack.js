import * as React from 'react';
import { inline, base, direction, justify, align, gap } from './Stack.css.js';

function Stack({ as, inline: inline$1 = false, direction: direction$1 = 'horizontal', justify: justify$1 = 'normal', align: align$1 = 'normal', gap: gap$1 = 'none', className, ...props }) {
    const As = as || 'div';
    return (React.createElement(As, { className: [
            inline$1 ? inline : base,
            direction[direction$1],
            justify[justify$1],
            align[align$1],
            gap[gap$1],
            className
        ]
            .filter(String)
            .join(' '), ...props }, props.children));
}

export { Stack };
