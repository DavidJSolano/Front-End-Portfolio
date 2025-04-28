import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample skills data
const technicalSkills = [
  { name: "React", level: 95, description: "Building complex, interactive UIs with React and its ecosystem" },
  { name: "Next.js", level: 90, description: "Server-side rendering, static site generation, and API routes" },
  { name: "JavaScript", level: 90, description: "ES6+, async/await, functional programming, and DOM manipulation" },
  { name: "TypeScript", level: 85, description: "Type-safe code with interfaces, generics, and advanced types" },
  { name: "Node.js", level: 80, description: "Building RESTful APIs, middleware, and server-side applications" },
  { name: "CSS", level: 90, description: "Responsive design, animations, and modern CSS features" },
  { name: "Tailwind CSS", level: 95, description: "Utility-first CSS framework for rapid UI development" },
  { name: "MongoDB", level: 75, description: "Schema design, queries, aggregation, and data modeling" },
  { name: "PostgreSQL", level: 70, description: "Relational database design, complex queries, and optimization" },
  { name: "GraphQL", level: 80, description: "Schema definition, resolvers, and client-side integration" },
  { name: "Git", level: 90, description: "Version control, branching strategies, and collaborative workflows" },
  { name: "Docker", level: 65, description: "Containerization, Docker Compose, and deployment workflows" },
]

const softSkills = [
  { name: "Problem Solving", level: 90, description: "Analytical thinking and creative solution development" },
  { name: "Communication", level: 85, description: "Clear and effective written and verbal communication" },
  { name: "Teamwork", level: 90, description: "Collaboration, knowledge sharing, and supporting team members" },
  { name: "Time Management", level: 80, description: "Prioritization, meeting deadlines, and efficient workflows" },
  { name: "Adaptability", level: 85, description: "Quick learning and adapting to new technologies and situations" },
  { name: "Leadership", level: 90, description: "Guiding teams, mentoring, and project management" },
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">My Skills</h1>
      <p className="text-xl text-muted-foreground mb-8">A comprehensive overview of my technical and soft skills</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="space-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 mb-2" />
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
          <div className="space-y-6">
            {softSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 mb-2" />
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "VS Code",
              "Git",
              "Figma",
              "Neovim",
              "Next.js",
              "Blender",
              "Flask",
              "Firebase",
              "AWS",
              "Vercel",
              "Netlify",
              "Storybook",
            ].map((tool) => (
              <Card key={tool} className="bg-muted">
                <CardContent className="p-4 text-center">
                  <p className="font-medium">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

