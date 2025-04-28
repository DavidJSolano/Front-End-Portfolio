import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden mb-6">
              <Image src="/profile-picture.png?height=400&width=400" alt="David Solano" fill className="object-cover" />
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileDown className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p>
              I'm a passionate Full Stack Developer with over 2 years of experience building web applications. I
              specialize in creating responsive, accessible, and performant web experiences using modern technologies.
            </p>
            <p>
              My journey in web development began during my university years when I built my first website for a local
              business. Since then, I've worked with established companies to deliver high-quality digital
              products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-2">
                <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">California State University, Fullerton, 2021-2025</p>
                <p>Graduated with honors, focusing on web technologies and software engineering.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4 py-2">
                <h3 className="text-lg font-medium">Software Development Engineer</h3>
                <p className="text-muted-foreground">Amazon Web Services, 2025-Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  Incoming Software Developer at Amazon Web Services.
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h3 className="text-lg font-medium">Software Developent Engineer Intern</h3>
                <p className="text-muted-foreground">Amazon Web Services, 2024</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  Developed and implemented an Artificial Intelligence feature within an AWS internal service, showcasing proficiency in
 services such as EC2, S3, Lambda, and CloudWatch. Demonstrated effective communication and teamwork skills in
 fast-paced environments, leading to the timely resolution of critical incidents and minimized service disruptions.
                </ul>
              </div>
            </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h3 className="text-lg font-medium">Computer Science Supplemental Instructor</h3>
                <p className="text-muted-foreground">California State University, Fullerton, 2023-2025</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                Create comprehensive study materials and interactive presentations to simplify Algorithms and Data Structures in C++
                concepts, resulting in a 15% increase in student comprehension and grades.
                </ul>
              </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Interests & Hobbies</h2>
            <p>
              Outside of coding, I enjoy hiking, biking, climbing, golfing, and playing music (Piano, Bass, Guitar, Drums, and Ukulele). I participate in local tech meetups and occasionally speak at web
              development conferences.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

