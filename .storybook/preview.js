import { lightThemeClass, darkThemeClass } from '../src/theme.css';
import './preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: lightThemeClass, color: 'white' },
      { name: 'dark', class: darkThemeClass, color: 'black' }
    ]
  }
};
