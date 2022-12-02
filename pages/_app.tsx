import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { GlobalStyle } from '../src/helpers/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <IconContext.Provider value={{}}>
        <GlobalStyle />
        <Component {...pageProps} />
      </IconContext.Provider>
    </>
  );
}
