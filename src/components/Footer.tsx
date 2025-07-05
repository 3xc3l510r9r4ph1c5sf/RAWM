import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Dribbble, Linkedin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Dribbble size={20} />, href: '#', label: 'Dribbble' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-raw-gray py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-space font-bold mb-4">
                <span className="text-raw-accent">Raw</span> Materials
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed">
                An unusual design company creating digital products that change brands' fortunes.
              </p>
            </motion.div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-raw-accent transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-raw-accent transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-raw-accent transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-raw-accent transition-colors">Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-raw-accent transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-raw-accent transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-raw-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-raw-accent transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Raw Materials. All rights reserved.
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-raw-accent/20 hover:text-raw-accent transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer