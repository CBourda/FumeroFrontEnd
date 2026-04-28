import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NavCards from './components/NavCards'
import Specializzazioni from './components/Specializzazioni'
import Carriera from './components/Carriera'
import Pubblicazioni from './components/Pubblicazioni'
import Cliniche from './components/Cliniche'
import Hero2 from './components/Hero2'
import Televisita from './components/Televisita'
import Ricovero from './components/Ricovero'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NavCards />
        <Specializzazioni />
        <Carriera />
        <Pubblicazioni />
        <Cliniche />
        <Hero2 />
        <Televisita />
        <Ricovero />
        <Contatti />
      </main>
      <Footer />
    </>
  )
}

export default App