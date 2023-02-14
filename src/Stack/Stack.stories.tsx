import * as React from 'react';
import { Stack } from './Stack';
import { Button } from '../Button/Button';
import * as classNames from './Stack.stories.css';
import { primitives } from '../theme.css';

export default {
  title: 'Components/Stack/Features'
};

export const Default = () => (
  <Stack gap="spacious">
    <label htmlFor="username">Username</label>
    <input type="text" id="username" placeholder="Enter your username" />
  </Stack>
);

export const Nested = () => (
  <Stack align="center" gap="condensed">
    <img src="https://github.com/siddharthkp.png" className={classNames.avatar} />
    <Stack direction="vertical">
      <span>Siddharth</span>
      <a className={classNames.link} href="https://github.com/siddharthkp">
        Open profile
      </a>
    </Stack>
  </Stack>
);

export const Justify = () => (
  <Stack direction="vertical" gap="spacious">
    <Stack justify="flex-start" gap="normal" align="center">
      <span>flex-start</span>
      <Button>Submit</Button>
      <Button>Cancel</Button>
    </Stack>

    <Stack justify="space-between" align="center">
      <Button>Submit</Button>
      <span>space-between</span>
      <Button>Cancel</Button>
    </Stack>

    <Stack justify="flex-end" gap="normal" align="center">
      <span>flex-end</span>
      <Button>Submit</Button>
      <Button>Cancel</Button>
    </Stack>
  </Stack>
);

export const Align = () => (
  <Stack direction="vertical" gap="spacious">
    <Stack align="start" style={{ height: primitives.base.size[64], backgroundColor: primitives.colors.canvas.inset }}>
      start
    </Stack>
    <Stack align="center" style={{ height: primitives.base.size[64], backgroundColor: primitives.colors.canvas.inset }}>
      center
    </Stack>
    <Stack align="end" style={{ height: primitives.base.size[64], backgroundColor: primitives.colors.canvas.inset }}>
      end
    </Stack>
  </Stack>
);
