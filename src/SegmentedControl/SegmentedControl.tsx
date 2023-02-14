import * as React from 'react';
import * as classNames from './SegmentedControl.css';
import { IconProps } from '@primer/octicons-react';
import { Stack } from '../Stack/Stack';

/**
 * Primary UI component for user interaction
 */
type SegmentedControlTypes = React.PropsWithChildren<{
  size?: 'small' | 'medium';
  onChange?: (selectedIndex: number) => void;
  fullWidth?:
    | boolean
    | {
        narrow: boolean;
        regular: boolean;
        wide: boolean;
      };
  // TODO: variant?: 'default' | Partial<Record<WidthOnlyViewportRangeKeys, 'hideLabels' | 'dropdown' | 'default'>>
}> &
  React.HTMLAttributes<HTMLUListElement>;

const SegmentedControlBase: React.FC<SegmentedControlTypes> = ({
  size = 'medium',
  onChange,
  fullWidth = false,
  className,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const children = React.Children.map(props.children, (child, index) => {
    if (!React.isValidElement<SegmentedControlButtonProps>(child)) return null;

    return React.cloneElement(child, {
      selected: selectedIndex === index,
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedIndex(index);
        if (typeof onChange === 'function') onChange(index);
        if (typeof child.props.onClick === 'function') child.props?.onClick(event);
      },
      _showSeperator:
        index === selectedIndex || // don't show after current selected item
        index + 1 === selectedIndex || // don't if next element is selected
        index === React.Children.count(props.children) - 1 // never show after last item
          ? false
          : true
    });
  });

  let fullWidthConfig = { narrow: false, regular: false, wide: false };
  if (typeof fullWidth === 'boolean') {
    fullWidthConfig = { narrow: fullWidth, regular: fullWidth, wide: fullWidth };
  } else if (typeof fullWidth === 'object') {
    fullWidthConfig = { ...fullWidthConfig, ...fullWidth };
  }

  return (
    <Stack
      as="ul"
      align="center"
      className={[
        classNames.ul,
        fullWidthConfig.narrow ? classNames.fullWidth.narrow.true : classNames.fullWidth.narrow.false,
        fullWidthConfig.regular ? classNames.fullWidth.regular.true : classNames.fullWidth.regular.false,
        fullWidthConfig.wide ? classNames.fullWidth.wide.true : classNames.fullWidth.wide.false,
        className
      ]
        .filter(String)
        .join(' ')}
      {...props}
    >
      {children}
    </Stack>
  );
};

type SegmentedControlButtonProps = {
  selected?: boolean;
  defaultSelected?: boolean;
  leadingIcon?: React.FunctionComponent<React.PropsWithChildren<IconProps>>;
  _showSeperator?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLIElement>;

const SegmentedControlButton: React.FC<SegmentedControlButtonProps> = ({
  selected = false,
  leadingIcon: LeadingIcon,
  _showSeperator,
  children,
  ...props
}) => (
  <li
    data-selected={Boolean(selected)}
    className={[classNames.li, _showSeperator ? classNames.seperator : ''].join(' ')}
  >
    <button className={classNames.button} {...props}>
      <Stack as="div" inline={true} align="center" justify="center" gap="xsmall" className={classNames.content}>
        {LeadingIcon && <LeadingIcon />}
        {children && <span>{children}</span>}
      </Stack>
      <Stack
        as="div"
        aria-hidden="true"
        align="center"
        justify="center"
        gap="condensed"
        className={classNames.hiddenBoldContent}
      >
        {LeadingIcon && <LeadingIcon />}
        {children && <span>{children}</span>}
      </Stack>
    </button>
  </li>
);

export const SegmentedControl = Object.assign(SegmentedControlBase, { Button: SegmentedControlButton });
