import GlobalStyles from './styles/GlobalStyles';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import { ThemeProviderCustom, useTheme, themes } from '@sh4re/ui';

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeProviderCustom>
      ``
      <ThemedApp />
    </ThemeProviderCustom>
  );
}

export default App;
