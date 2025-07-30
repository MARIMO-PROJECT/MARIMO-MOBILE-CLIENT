import { Global, ThemeProvider } from "@emotion/react"
import theme from "./styles/theme"
import GlobalStyle from "./styles/global"
import MovieConcept from "./pages/MovieConcept/MovieConcept"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <MovieConcept />
    </ThemeProvider>
  )
}

export default App
