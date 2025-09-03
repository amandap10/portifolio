import About from "../Components/About"
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
    </div>
  )
}

export default Index