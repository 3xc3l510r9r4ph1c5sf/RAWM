import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Code, Smartphone, Globe } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Brand Identity',
      description: 'Complete brand systems that capture your essence and resonate with your audience.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Design',
      description: 'Stunning websites that convert visitors into customers and elevate your digital presence.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications that deliver exceptional user experiences.',
    },
    {
      icon: <Code size={32} />,
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technologies and best practices.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-raw-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            Our <span className="text-accent-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of design and development services 
            to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover-lift group"
            >
              <div className="text-raw-accent mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-space font-semibold mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services