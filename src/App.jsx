import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
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
          <Hero2 />
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