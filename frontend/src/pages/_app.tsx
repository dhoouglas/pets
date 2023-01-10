import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Header from '../ui/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={tema}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );   
}
