"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import image1 from './whisper.png'
import image2 from './task-manager.png'
import image3 from './socialmedia.png'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Live Messageing App ",
      description: "A full-featured online Chatting app like Whatsapp, made with high end tecnologies",
      image: image1,
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: image2,
      techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for tracking social media performance across multiple platforms.",
      image: image3,
      techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#f5f5f8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-300">more projects are personal client based</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
