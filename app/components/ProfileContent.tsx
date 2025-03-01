"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfileContent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">Jane Doe</h1>
          <p className="text-xl text-muted-foreground">Creative Director & Floral Artist</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Jane Doe"
              width={400}
              height={400}
              className="rounded-full mx-auto shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in floral design and creative direction, I've had the privilege of
              working with some of the most innovative brands and inspiring individuals in the industry. My passion lies
              in creating minimalist, yet impactful designs that tell a story and evoke emotion.
            </p>
            <p className="text-muted-foreground mb-6">
              At Flowers & Saints, I lead a team of talented artists and designers, pushing the boundaries of what's
              possible when we blend nature with contemporary aesthetics. Our work has been featured in numerous
              publications and has garnered international recognition.
            </p>
            <p className="text-muted-foreground">
              When I'm not in the studio, you can find me exploring art galleries, tending to my personal garden, or
              mentoring up-and-coming designers in the field.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">My Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Floral Design", "Creative Direction", "Brand Collaboration"].map((skill, index) => (
              <div
                key={skill}
                className="bg-background p-6 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">{skill}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

