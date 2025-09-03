import About from "../Components/About"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"


const Index = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Index