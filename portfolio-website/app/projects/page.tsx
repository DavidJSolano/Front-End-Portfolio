import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "GitGood",
    description:
      "An open-source platform that allows users to submit custom coding questions and engage with a community of problem solvers, driving active user participation and content creation.",
    image: "/gitgood.png",
    technologies: ["React", "Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    challenges: "Implementing a secure payment system and optimizing performance for large product catalogs.",
    github: "https://github.com/PillowGit/gitgood",
    live: "https://gitgood.cc",
    slug: "gitgood",
  },
  {
    id: 2,
    title: "Omniscience AI",
    description: "An AI personal assistant that responds to any question I provde it.",
    image: "/omniscienceai.jpg",
    technologies: ["OpenAI", "Python", "Raspberry Pi OS"],
    challenges: "Implementing real-time assistant that responds optimally.",
    github: "https://github.com/DavidJSolano/OmniscienceAI",
    live: "https://github.com/DavidJSolano/OmniscienceAI",
    slug: "omniscienceai",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/portfoliov1.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenges: "Creating a performant and visually appealing design that works across all devices.",
    github: "https://github.com/DavidJSolano/Portfolio-Website",
    live: "https://davidsolano.dev",
    slug: "portfoliov1",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts and historical weather data.",
    image: "/weatherapp.png",
    technologies: ["JavaScript", "OpenWeather API", "CSS3"],
    challenges: "Processing and visualizing large amounts of weather data efficiently.",
    github: "https://github.com/DavidJSolano/WeatherApp",
    live: "https://solano-weather-app.vercel.app/",
    slug: "weather-dashboard",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">A collection of my recent work and personal projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <Link href={`/projects/${project.slug}`}>
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button asChild variant="ghost" size="icon">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

