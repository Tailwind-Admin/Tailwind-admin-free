import { RouterProvider } from "react-router";

import { ThemeModeScript, ThemeProvider } from 'flowbite-react';
import customTheme from './utils/theme/custom-theme';
import router from "./routes/Router";
import './css/globals.css'

function App() {

  return (
    <>
      <ThemeModeScript />
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
