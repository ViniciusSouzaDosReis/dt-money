import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}

export { App }
