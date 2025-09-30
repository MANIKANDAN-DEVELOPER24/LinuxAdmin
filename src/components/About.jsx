import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const stats = [
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Clock, number: '2+', label: 'Years Experience' },
    { icon: CheckCircle, number: '25+', label: 'Projects Completed' },
    { icon: Award, number: '24/7', label: 'Support Available' },
  ];
  const [showResume, setShowResume] = useState(false);

  const skills = [
    { name: 'Red Hat Enterprise Linux', level: 95 },
    { name: 'Ubuntu/Debian', level: 98 },
    { name: 'Docker & Kubernetes', level: 90 },
    { name: 'AWS/GCP/Azure', level: 85 },
    { name: 'Security Hardening', level: 92 },
    { name: 'Database Administration', level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About LinuxPro Admin
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 2+ years of experience in Linux system administration, I specialize in building
              robust, secure, and scalable infrastructure solutions. My expertise spans across various
              Linux distributions, cloud platforms, and enterprise-grade security implementations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I'm passionate about helping businesses optimize their IT infrastructure, reduce downtime,
              and implement best practices for security and performance. Every project is approached with
              meticulous attention to detail and a commitment to delivering exceptional results.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowResume(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Resume
            </button>
            {showResume && (
              <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded-lg shadow-lg relative">

                  {/* Close Button */}
                  <button
                    onClick={() => setShowResume(false)}
                    className="absolute top-2 right-2 z-50 bg-white text-gray-700 hover:text-gray-900 font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  >
                    &times;
                  </button>

                  {/* PDF Viewer */}
                  <iframe
                    src={`${import.meta.env.BASE_URL}resume.pdf`}
                    className="w-full h-full rounded-lg"
                    title="Resume"
                  />
                </div>
              </div>
            )}


          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Linux Administrator"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

};

export default About;
