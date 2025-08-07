import { Global, ThemeProvider } from "@emotion/react"
import theme from "./styles/theme"
import GlobalStyle from "./styles/global"
// import MovieConcept from "./pages/MovieConcept/MovieConcept"
import MagazineConcept from "./pages/MagazineConcept/MagazineConcept"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <MagazineConcept />
    </ThemeProvider>
  )
}

export default App
