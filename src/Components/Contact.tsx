import { FaMailBulk, FaPhone } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"


function Contact() {

  return (
    <section>
      <div className="max-w-6xl p-8 mx-auto">

        <div className="">
          <h2 className="text-[#6B28D9] text-2xl md:text-3xl font-bold text-center mb-8">
            Vamos Trabalhar Juntos?
          </h2>
        </div>

        <div className="">
          <h3 className="text-white">
            Entrar em Contato
          </h3>

          <p className="text-white"> 
            Estou sempre aberta para discutir projetos interessantes,
            oportunidades de colaboração ou apenas trocar ideias sobre tecnologia.
            Entre em contato!
          </p>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4">
              <div className="border bg-[#6B28D9]/20 p-6 rounded-lg flex items-center justify-center">
                <FaMailBulk className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="font-medium text-white">Email</div>
                <div className="text-white">amanda_passos@outlook.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="border bg-[#6B28D9]/20 p-6 rounded-lg flex items-center justify-center">
                <FaPhone className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="font-medium text-white">Telefone</div>
                <div className="text-white">+55 (15) 99660-9543</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="border bg-[#6B28D9]/20 p-6 rounded-lg flex items-center justify-center">
                <FaLocationPin className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="font-medium text-white">Localização</div>
                <div className="text-white">Sorocaba/SP</div>
              </div>
            </div>

          </div>
        
        </div>

      </div>
    </section>
  )
}

export default Contact