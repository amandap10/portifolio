

function About() {
  return (
    
    <div className="flex flex-col text-center items-center text-white">
      <div className='max-w-2xl p-6 max-w-screen-md mx-auto'>
        <h2 className="text-2xl md:text-3xl font-bold text-[#6B28D9] text-center mb-8 gradient-text">
          Sobre Mim
        </h2>

        <div className="flex justify-center pb-4 grid gap-8">

          <p className="flex text-justify">
            Sou apaixonada por tecnologia e por aprender coisas novas. Tenho experiência em desenvolvimento web 
            com React e REST APIs, além de conhecimento em redes e infraestrutura, o que me dá uma visão mais 
            ampla de como sistemas e aplicações funcionam de ponta a ponta.
          </p>
          <p className="text-justify">
           Atualmente estou aprofundando meus estudos em GraphQL, buscando expandir minha stack e evoluir como 
           desenvolvedora. Gosto de transformar ideias em soluções práticas, explorando tanto a parte visual 
           quanto a lógica, sempre com foco em aprendizado contínuo e impacto positivo. 🚀
          </p>

        </div>

        
      </div>
    </div>
  )
}

export default About