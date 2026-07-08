import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { CutRule } from './components/ui'
import {
  TrustBar, About, Products, Empresas, Clientes, Streetwear,
  Diferenciais, Processo, Portfolio, Feedbacks, FAQ, CTAFinal,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <CutRule />
        <Products />
        <Empresas />
        <Clientes />
        <Streetwear />
        <Diferenciais />
        <Processo />
        <Portfolio />
        <Feedbacks />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
