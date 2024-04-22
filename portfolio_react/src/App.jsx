import About from "./components/About"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services/>
    </div>
  )
}

export default App