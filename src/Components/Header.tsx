import Avatar from '../assets/avatar.jpg'

function Header() {

  return (
    <div className=' '>
      <div className=' text-center'>
        
        <div className=''>
          <div className='relative inline-block mb-6'>
            <div className='w-32 h-32 md:w-40 md:h-40 mt-24 mx-auto rounded-full overflow-hidden border-accent/30 animate-float'>
              <img 
                className='w-full h-full object-cover '
                src={Avatar} 
                alt="Desenvolvedora Front End" 
              />
              <div className='absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-background animate-pulse'></div>
            </div>
          </div>
        </div>

        <div className='mt-6 mb-6 flex flex-col items-center text-white'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text'>
            Amanda Oliveira
          </h1>
          <p className='text-lg md:text-xl text-muded-foreground font-medium'>
            Desenvolvedora Front-End
          </p>
          <p className='text-sm md:text-base text-muded-foreground text-center w-72 mt-2 max-w-md mx-auto'>
            Criando experiências digitais modernas com tecnologias web.
          </p>
        </div>

        {/* Botões e Ação */}
        <div className='justify-center items-center flex flex-col sm:flex-row gap-4 mb-8 text-white'>
          <button className='bg-[#6B28D9] rounded-xl w-80 h-6'>
            Entrar em contato
          </button>
          <button className='bg-[#6B28D9] rounded-xl w-80 h-6'>
            Download CV
          </button>
        </div>

        {/* Icons redes sociais  */}


      </div>
    </div>
  )
}

export default Header