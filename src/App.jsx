import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specializzazioni from './components/Specializzazioni'
import Galleria from './components/Galleria'
import Ricovero from './components/Ricovero'
import Carriera from './components/Carriera'
import Pubblicazioni from './components/Pubblicazioni'
import Televisita from './components/Televisita'
import Cliniche from './components/Cliniche'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <Specializzazioni />
          <Galleria />
          <Ricovero />
          <Carriera />
          <Pubblicazioni />
          <Televisita />
          <Cliniche />
          <Contatti />
        </main>
        <Footer />
      </>
  )
}

export default App