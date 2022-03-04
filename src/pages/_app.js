import { Fragment, useState } from 'react';
import Head from 'next/head';
import '../assets/styles/index.css';
import '../assets/styles/global.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from 'context/Auth';
import { UIProvider } from 'components/UI/context';
import AxiosProvider from 'context/Axios';
import PageWrapper from 'components/Sys/PageWrapper';

if (process.env.NODE_ENV !== 'production') {
  console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);
}

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: false,
            refetchOnWindowFocus: false,
            retry(failureCount, error) {
              if (
                error.response?.status === 401 ||
                error.response?.status === 404
              )
                return false;
              else if (failureCount < 1) return true;
              else return false;
            },
          },
        },
      })
  );
  return (
    <Fragment>
      <Head>
        {/* {process.env.NODE_ENV !== 'production' && (
          <link rel="stylesheet" href="/dev.css" />
        )} */}
        <title>E-server.com.ua</title>

        <>
          <meta name="viewport" content="width=device-width" />
          <link
            rel="preload"
            href="/fonts/Daikon-Bold.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Daikon-Medium.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Daikon-SemiBold.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Daikon-Regular.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Daikon-Black.woff2"
            as="font"
            crossOrigin="true"
          />
        </>
      </Head>
      <UIProvider>
        <AxiosProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <AuthProvider>
                <PageWrapper>
                  <Component {...pageProps} />
                </PageWrapper>
              </AuthProvider>
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </Hydrate>
          </QueryClientProvider>
        </AxiosProvider>
      </UIProvider>
    </Fragment>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
