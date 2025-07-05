import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-raw-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-8">
              We are <span className="text-accent-gradient">Raw Materials</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded on the belief that exceptional design can transform businesses, 
                we specialize in creating digital experiences that don't just look beautiful—they drive results.
              </p>
              
              <p>
                Our team combines strategic thinking with creative execution, 
                delivering solutions that are both visually stunning and commercially successful.
              </p>
              
              <p>
                From startups to Fortune 500 companies, we've helped brands discover 
                their unique voice and express it through compelling digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-raw-accent/20 to-blue-500/20 rounded-3xl p-8">
              <div className="h-full bg-raw-black/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-raw-accent mb-4">50+</div>
                  <div className="text-xl text-gray-300">Projects Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About