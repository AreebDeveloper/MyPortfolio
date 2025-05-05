const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "RESTful APIs"],
      },
      {
        title: "Database",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Figma"],
      },
    ]
  
    return (
      <section id="skills" className="py-20 bg-[#f5f5f8]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Skills</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  