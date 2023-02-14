import '../node_modules/react/index.js';
import { inline, direction, justify, align, gap } from './Stack.css.js';
import { exports as reactExports } from '../_virtual/index.js';

function Stack({ as, inline: inline$1 = false, direction: direction$1 = 'horizontal', justify: justify$1 = 'normal', align: align$1 = 'normal', gap: gap$1 = 'none', className, ...props }) {
    const As = as || 'div';
    return (reactExports.createElement(As, { className: [
            inline$1 ? inline : className.base,
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
