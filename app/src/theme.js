import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#58a6ff',
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8b949e',
    },
    divider: '#30363d',
  },
  typography: {
    fontFamily: 'Muli, sans-serif',
    h1: { fontFamily: '"Space Mono", monospace', color: '#58a6ff' },
    h2: { fontFamily: '"Space Mono", monospace', color: '#58a6ff' },
    h3: { fontFamily: '"Space Mono", monospace', color: '#58a6ff' },
    h4: { fontFamily: '"Space Mono", monospace', color: '#79c0ff' },
    h5: { fontFamily: '"Space Mono", monospace', color: '#79c0ff' },
    h6: { fontFamily: '"Space Mono", monospace', color: '#79c0ff' },
  },
});

export default theme;
