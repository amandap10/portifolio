

function Skills() {

  const skillCategories= [
    {
      title: "Frontend",
      skills: ["React", "Typescript"]
    }
  ]

  return (
    <section>
      <div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white">
              Habilidades & Tecnologias
            </h2>

            <div>
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="card-glass text-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3>
                    {category.title}
                  </h3>
                  <div>
                    {category.skills.map((skill) => (
                      <div 
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