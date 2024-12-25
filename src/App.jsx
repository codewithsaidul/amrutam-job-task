import About from "./component/About"
import Approuch from "./component/Approuch"
import Consultations from "./component/Consultations"
import Harmony from "./component/Harmony"
import Hero from "./component/Hero"
import HeroFooter from "./component/HeroFooter"
import Navbar from "./component/Navbar"

 

function App() {


  return (
    <>
        <Navbar />

        <main className="">
          <Hero />
          <HeroFooter />
          <About />
          <Consultations />
          <Harmony />
          <Approuch />
        </main>
    </>
  )
}

export default App
