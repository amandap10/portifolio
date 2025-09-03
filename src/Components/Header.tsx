import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Avatar from '../assets/avatar.jpg'

function Header() {

  return (
    <div className='portifolio'>
      <div className=' text-center'>
        
        <div className=''>
          <div className='relative inline-block mb-6'>
            <div className='w-32 h-32 md:w-40 md:h-40 mt-24 mx-auto rounded-full overflow-hidden'>
              <img 
                className='w-full h-full object-cover '
                src={Avatar} 
                alt="Desenvolvedora Front End" 
              />
              <div className='absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-background animate-pulse'></div>
            </div>
          </div>
        </div>

        <div className='mt-6 mb-10 flex flex-col items-center text-white'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text mb-2'>
            Amanda Oliveira
          </h1>
          <p className='text-xl md:text-xl text-muded-foreground font-medium mb-4'>
            Desenvolvedora Front-End
          </p>
          <p className='text-base md:text-lg text-muded-foreground text-center mt-2 max-w-md mx-auto'>
            Criando experiências digitais modernas com tecnologias web.
          </p>
        </div>

        {/* Botões e Ação */}
        <div className='justify-center items-center flex flex-col sm:flex-row gap-4 mb-10 text-white'>
          <button className='bg-[#6B28D9] rounded-xl w-80 h-10'>
            
            Entrar em contato
          </button>
          <button className='bg-[#6B28D9] rounded-xl w-80 h-10'>
            
            Download CV
          </button>
        </div>

        {/* Icons redes sociais  */}

        <div className='justify-center items-center flex mb-6 gap-4'>
          <FaLinkedin className='fill-white w-6 h-6'/>
          <FaGithub className='fill-white w-6 h-6'/>
          <FaInstagram className='fill-white w-6 h-6'/>
        </div>

      </div>
    </div>
  )
}

export default Header