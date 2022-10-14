import GlobalStyle from '../styles/GlobalStyled'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
