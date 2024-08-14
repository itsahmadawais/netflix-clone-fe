import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages'
import customTheme from './theme'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home/>
    </ChakraProvider>
  )
}

export default App
