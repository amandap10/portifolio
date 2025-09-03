import { FaMailBulk, FaPhone } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"


function Contact() {
  return (
    <section>
      <div className="max-w-6xl p-8 mx-auto">

        <div className="">
          <h2 className="text-[#6B28D9] text-2xl md:text-3xl font-bold text-center mb-12">
            Vamos Trabalhar Juntos?
          </h2>

          <div>
            <h3 className="text-white">
              Entrar em Contato
            </h3>

            <p className="text-white"> 
              Estou sempre aberta para discutir projetos interessantes,
              oportunidades de colaboração ou apenas trocar ideias sobre tecnologia.
              Entre em contato!
            </p>

            <FaMailBulk className="fill-white w-10 h-10"/>
            <FaPhone className="fill-white w-10 h-10"/>
            <FaLocationPin className="fill-white w-10 h-10"/>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact