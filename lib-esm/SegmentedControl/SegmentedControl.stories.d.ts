import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FC<{
        size?: "small" | "medium" | undefined;
        onChange?: ((selectedIndex: number) => void) | undefined;
        fullWidth?: boolean | {
            narrow: boolean;
            regular: boolean;
            wide: boolean;
        } | undefined;
    } & {
        children?: React.ReactNode;
    } & React.HTMLAttributes<HTMLUListElement>> & {
        Button: React.FC<{
            selected?: boolean | undefined;
            defaultSelected?: boolean | undefined;
            leadingIcon?: React.FunctionComponent<React.PropsWithChildren<import("@primer/octicons-react/dist/icons").IconProps>> | undefined;
            _showSeperator?: boolean | undefined;
        } & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLIElement>>;
    };
};
export default _default;
export declare const Default: () => JSX.Element;
export declare const WithIcons: () => JSX.Element;
export declare const FullwidthAll: () => JSX.Element;
export declare const FullwidthNarrow: () => JSX.Element;
export declare const FullwidthRegular: () => JSX.Element;
export declare const IconOnly: () => JSX.Element;
