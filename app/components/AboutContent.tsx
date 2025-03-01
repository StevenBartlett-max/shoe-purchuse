"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutContent() {
  const features = [
    {
      title: "Next.js App Router",
      description: "Utilizes the latest Next.js 13+ features for optimal performance and developer experience.",
    },
    {
      title: "React Server Components",
      description: "Leverages server-side rendering for improved initial load times and SEO.",
    },
    {
      title: "Tailwind CSS",
      description: "Employs utility-first CSS for rapid UI development and easy customization.",
    },
    {
      title: "Shadcn UI",
      description: "Integrates beautifully designed, accessible UI components for a polished look.",
    },
    {
      title: "Framer Motion",
      description: "Implements smooth animations and transitions for an engaging user experience.",
    },
    {
      title: "Dark Mode",
      description: "Supports system-preferred and user-selected color schemes.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">About Our App</h1>
          <p className="text-xl text-muted-foreground">
            A modern, responsive web application built with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
              <CardDescription>Our application is built using the following technologies:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js 13+</Badge>
                <Badge variant="secondary">React 18</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn UI</Badge>
                <Badge variant="secondary">Framer Motion</Badge>
                <Badge variant="secondary">React Hook Form</Badge>
                <Badge variant="secondary">Zod</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>About the Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This project serves as a foundation for building modern web applications. It demonstrates best
                  practices in front-end development, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Responsive design principles</li>
                  <li>Component-based architecture</li>
                  <li>State management using React hooks</li>
                  <li>Form handling with validation</li>
                  <li>Smooth animations and transitions</li>
                  <li>Accessibility considerations</li>
                  <li>Performance optimization techniques</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

