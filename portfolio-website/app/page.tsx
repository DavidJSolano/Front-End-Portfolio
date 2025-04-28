import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">David Solano</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer specializing in modern web technologies
          </p>
          <p className="text-lg text-muted-foreground">
            I build accessible, responsive, and performant web applications with React, Next.js, and Node.js.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/mypfp.png?height=320&width=320" alt="David Solano" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      <div className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={`/gitgood.png`}
                  alt={`GitGood`}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">GitGood</h3>
                <p className="mt-2 text-muted-foreground">
                An open-source platform that allows users to submit custom coding questions and engage with
                a community of problem solvers, driving active user participation and content creation.
                </p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href={`/projects/gitgood`}>
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={`/portfoliov1.png`}
                  alt={`Portfolio Website V1`}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Portfolio Website V1</h3>
                <p className="mt-2 text-muted-foreground">
                  This is the first iteration of my portfolio website. It was developed using React.js, Tailwind CSS, and Framer Motion!
                </p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href={`/projects/portfoliov1`}>
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={`/weatherapp.png`}
                  alt={`Weather App`}
                  width={400}
                  height={200}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Weather Applicaton</h3>
                <p className="mt-2 text-muted-foreground">
                  A Javscript oriented application that utilizes the Open Weather API to display the weather at any given city!
                </p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href={`/projects/weatherapp`}>
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>

      <div className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "GraphQL"].map(
            (skill) => (
              <div
                key={skill}
                className="flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ),
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/skills">View All Skills</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

