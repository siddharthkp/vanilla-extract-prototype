import * as React from 'react';
import { IconProps } from '@primer/octicons-react';
/**
 * Primary UI component for user interaction
 */
type SegmentedControlTypes = React.PropsWithChildren<{
    size?: 'small' | 'medium';
    onChange?: (selectedIndex: number) => void;
    fullWidth?: boolean | {
        narrow: boolean;
        regular: boolean;
        wide: boolean;
    };
}> & React.HTMLAttributes<HTMLUListElement>;
type SegmentedControlButtonProps = {
    selected?: boolean;
    defaultSelected?: boolean;
    leadingIcon?: React.FunctionComponent<React.PropsWithChildren<IconProps>>;
    _showSeperator?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLIElement>;
export declare const SegmentedControl: React.FC<SegmentedControlTypes> & {
    Button: React.FC<SegmentedControlButtonProps>;
};
export {};
