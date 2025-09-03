

function Skills() {

  const skillCategories= [
    {
      title: "Frontend",
      skills: ["React", "Typescript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "REST APIs", "GraphQL"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "AWS", "GPO", "GLPI", "ZABBIX", "VS Code"]
    },
    {
      title: "Soft Skills",
      skills: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Criatividade"]
    }
  ]

  return (
    <section className="bg-gray-900 ">
      <div className="pt-6 pb-10">
        <div className="max-w-6xl p-6 mx-auto">
          <h2 className="text-[#6B28D9] text-2xl md:text-3xl font-bold text-center mb-12">
            Habilidades & Tecnologias
          </h2>

          <div className=" flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl shadow-sm border border-white/20 p-6 text-white"
              >
                <h3 className="text-[#6B28D9] text-lg font-semibold mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                    className="px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                      key={skill}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills