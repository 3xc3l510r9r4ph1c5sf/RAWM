import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Work = () => {
  const projects = [
    {
      title: 'TechFlow',
      category: 'SaaS Platform',
      description: 'Complete redesign of a workflow management platform, increasing user engagement by 300%.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mindful',
      category: 'Mobile App',
      description: 'Meditation app that reached #1 in the App Store wellness category.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'EcoMarket',
      category: 'E-commerce',
      description: 'Sustainable marketplace connecting eco-conscious consumers with green brands.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'FinanceFlow',
      category: 'Fintech',
      description: 'Revolutionary banking app that simplifies personal finance management.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  return (
    <section id="work" className="py-24 bg-raw-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            Selected <span className="text-accent-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of our most impactful projects and the results they achieved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-raw-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm text-raw-accent font-medium">
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-space font-semibold group-hover:text-raw-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work