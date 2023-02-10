import About from "components/About"
import Contact from "components/Contact"
import Footer from "components/Footer"
import Header from "components/Header"
import Reviews from "components/Reviews"
import Services from "components/Services"
import WhatsAppButton from "components/WhatsAppButton"

export default function Page() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  )
}
