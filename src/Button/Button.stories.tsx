import { EyeIcon, HeartIcon } from '@primer/octicons-react';
import * as React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button/Features'
};

export const Default = () => <Button>Default</Button>;

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;

export const Invisible = () => <Button variant="invisible">Invisible</Button>;

export const Outline = () => <Button variant="outline">Outline</Button>;

export const LeadingVisual = () => <Button leadingIcon={HeartIcon}>Leading visual</Button>;

export const TrailingVisual = () => <Button trailingIcon={EyeIcon}>Trailing visual</Button>;

export const TrailingCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button onClick={() => setCount(count + 1)} variant="primary">
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button onClick={() => setCount(count + 1)} variant="invisible">
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <br />
      <br />
      <Button onClick={() => setCount(count + 1)} size="small">
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button onClick={() => setCount(count + 1)} size="medium">
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button onClick={() => setCount(count + 1)} size="large">
        Watch
        <Button.Counter>{count}</Button.Counter>
      </Button>
    </>
  );
};

export const Disabled = () => (
  <>
    <Button disabled>Default</Button>
    <Button disabled variant="primary">
      Primary
    </Button>
    <Button disabled variant="danger">
      Danger
    </Button>
    <Button disabled variant="invisible">
      Invisible
    </Button>
    <Button disabled variant="outline">
      Outline
    </Button>
  </>
);

export const Size = () => (
  <>
    <Button size="small">Default</Button>
    <Button size="medium">Default</Button>
    <Button size="large">Default</Button>
    <br />
    <Button size="small" leadingIcon={HeartIcon}>
      Default
    </Button>
    <Button size="medium" leadingIcon={HeartIcon}>
      Default
    </Button>
    <Button size="large" leadingIcon={HeartIcon}>
      Default
    </Button>
  </>
);
