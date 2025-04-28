import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// Sample project data (same as in projects/page.tsx)
const projects = [
  {
    id: 1,
    title: "Gitgood",
    description:
      "An open-source platform that allows users to submit custom coding questions and engage with a community of problem solvers, driving active user participation and content creation.",
    image: "/gitgood.png",
    technologies: ["React", "Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    challenges: "Implementing the system for users to submit whatever problem they wanted.",
    github: "https://github.com/PillowGit/gitgood",
    live: "https://gitgood.cc",
    slug: "gitgood",
    longDescription: `
    The product is a web application designed to enhance coding skills through community-generated challenges, catering to aspiring developers seeking diverse coding practices. Unlike traditional coding challenge platforms, it is a community platform that allows users to easily create and share their own coding challenges, as opposed to solving only pre-existing ones.
    `
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
    longDescription: `
      OmniscienceAI is an AI reponds to any question that a user has. Using speech-to-text, OmniscienceAI is able to understand real dialect and respond in real time. 
    `,
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
    longDescription: `
      This portfolio website was created to showcase my projects, skills, and professional experience
      in a clean and modern design. The site features smooth animations, responsive layouts, and
      optimized performance.
      
      Built with Next.js and styled with Tailwind CSS, the website offers fast page loads and
      a great user experience on all devices. Framer Motion was used to add subtle animations
      that enhance the browsing experience without being distracting.
      
      The main challenge was designing a visually appealing interface that would work seamlessly
      across all device sizes while maintaining excellent performance. This was achieved through
      careful planning of the responsive layout and optimization of assets.
      
      The portfolio has received positive feedback from clients and peers, and has directly
      led to multiple freelance opportunities. It serves as both a showcase of technical skills
      and a practical demonstration of web design principles.
    `,
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
    longDescription: `
      The Weather Dashboard is a web application that provides users with current weather conditions,
      forecasts, and historical weather data for locations worldwide. It features interactive charts,
      maps, and detailed weather information.
      
      Built with vanilla JavaScript and CSS3, the app integrates with the OpenWeather API to fetch
      weather data.
    `,
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
    longDescription: `
      Recipe Finder is an application that helps users discover recipes based on ingredients they
      already have at home. Users can input available ingredients, dietary restrictions, and
      preferences to find matching recipes.
      
      The frontend was built with React, providing an interactive and responsive user interface.
      The backend uses Node.js with Express, connected to MongoDB for storing user data and favorite recipes.
      The Spoonacular API is used to access a vast database of recipes and ingredients.
      
      The main challenge was creating an efficient search algorithm that could handle complex
      filtering options while providing relevant results quickly. This was solved by implementing
      a sophisticated matching algorithm and caching frequently requested searches.
      
      The app was featured in a cooking magazine and has reached over 10,000 monthly active users.
      It has helped users reduce food waste and discover new recipes based on what they already have.
    `,
    screenshots: [
      "/placeholder.svg?height=300&width=600&text=Screenshot+1",
      "/placeholder.svg?height=300&width=600&text=Screenshot+2",
      "/placeholder.svg?height=300&width=600&text=Screenshot+3",
    ],
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
    longDescription: `
      The Fitness Tracker is a comprehensive application for tracking workouts, nutrition, and
      overall fitness progress. It allows users to log exercises, set goals, track metrics,
      and visualize their progress over time.
      
      Developed with React Native for cross-platform compatibility, the app uses Firebase for
      backend services and user authentication. D3.js is integrated for creating interactive
      charts and visualizations of fitness data. TypeScript was used to ensure code quality
      and maintainability.
      
      A significant challenge was designing an intuitive user interface that could present complex
      fitness data in an accessible way while ensuring the app worked consistently across different
      devices and platforms. This was addressed through extensive user testing and iterative design.
      
      The Fitness Tracker has received a 4.8/5 rating on app stores, with users reporting that
      it has helped them achieve their fitness goals through its comprehensive tracking features
      and motivational elements.
    `,
    screenshots: [
      "/placeholder.svg?height=300&width=600&text=Screenshot+1",
      "/placeholder.svg?height=300&width=600&text=Screenshot+2",
      "/placeholder.svg?height=300&width=600&text=Screenshot+3",
    ],
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg">{project.description}</p>

            <div className="mt-6 space-y-4">
              <h2 className="text-2xl font-semibold">Project Details</h2>
              <p>{project.longDescription}</p>

              <h3 className="text-xl font-semibold mt-6">Challenges</h3>
              <p>{project.challenges}</p>

            </div>
          </div>


        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </Link>
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

