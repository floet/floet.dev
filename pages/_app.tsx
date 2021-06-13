import 'tailwindcss/tailwind.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from "next/head";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle``
const theme = {}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp