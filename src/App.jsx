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
        </main>
    </>
  )
}

export default App
