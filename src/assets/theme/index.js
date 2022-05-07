import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      700: '#021518',
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Forum, sans-serif',
    mono: 'Menlo, monospace',
  },
  styles: {
    global: ({
      body: {
        background: 'blackAlpha.900',
      },
    }),
  },
});

export default theme;
