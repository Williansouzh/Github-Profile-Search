import * as C from './app.styles'


import { Footer } from './components/footer'
import {Container } from './components/Container/'
const App = ()=>{
  return(
    <C.Container>
      <Container/>
      <Footer/>
    </C.Container>
  )
}

export default App