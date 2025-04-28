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
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=600&text=Task+App",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    challenges: "Implementing real-time synchronization across multiple users and devices.",
    outcomes: "Adopted by 15+ teams with positive feedback on usability and performance.",
    github: "https://github.com",
    live: "https://example.com",
    slug: "task-management-app",
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
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web application that helps users find recipes based on available ingredients.",
    image: "/placeholder.svg?height=300&width=600&text=Recipe+Finder",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Spoonacular API"],
    challenges: "Creating an efficient search algorithm and managing complex filtering options.",
    outcomes: "Featured in a cooking magazine and reached 10,000+ monthly active users.",
    github: "https://github.com",
    live: "https://example.com",
    slug: "recipe-finder",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A mobile-responsive application for tracking workouts and fitness progress.",
    image: "/placeholder.svg?height=300&width=600&text=Fitness+Tracker",
    technologies: ["React Native", "Firebase", "D3.js", "TypeScript"],
    challenges: "Designing an intuitive UI for complex fitness data and ensuring cross-platform compatibility.",
    outcomes: "Helped users achieve their fitness goals with a 4.8/5 rating on app stores.",
    github: "https://github.com",
    live: "https://example.com",
    slug: "fitness-tracker",
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

