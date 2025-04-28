import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">David Solano</h3>
            <p className="text-muted-foreground max-w-md">
              A passionate Full Stack Developer specializing in building exceptional digital experiences. Let's work
              together to bring your ideas to life!
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://github.com/DavidJSolano" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/david-solano787/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:davidjesolano@gmail.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Yorba Linda, CA</p>
              <p>
                <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                  davidjesolano@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+17149436336" className="hover:text-primary transition-colors">
                  +1 (714) 943-6336
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} David Solano. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed and built with ❤️ by David Solano
          </p>
        </div>
      </div>
    </footer>
  )
}

