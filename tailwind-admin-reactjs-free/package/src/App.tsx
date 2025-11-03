import { RouterProvider } from 'react-router';
import { ThemeProvider } from 'flowbite-react';
import customTheme from './utils/theme/custom-theme';
import router from './routes/Router';
import './css/globals.css';
import { ShadcnThemeProvider } from './components/provider/theme-provider';

function App() {
  return (
    <>
      <ShadcnThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ThemeProvider theme={customTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ShadcnThemeProvider>
    </>
  );
}

export default App;
