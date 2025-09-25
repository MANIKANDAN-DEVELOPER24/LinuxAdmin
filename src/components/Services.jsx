import React from 'react';
import { Server, Shield, Database, MonitorSpeaker, Cloud, Terminal, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Complete server setup, configuration, and maintenance for optimal performance',
      features: ['Server Installation', 'Configuration Management', 'Performance Optimization', 'Updates & Patches'],
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      description: 'Comprehensive security implementation to protect your infrastructure',
      features: ['Firewall Configuration', 'SSL/TLS Setup', 'Intrusion Detection', 'Vulnerability Assessment'],
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Professional database management and optimization services',
      features: ['MySQL/PostgreSQL Setup', 'Backup Strategies', 'Performance Tuning', 'Data Migration'],
    },
    {
      icon: MonitorSpeaker,
      title: 'System Monitoring',
      description: '24/7 monitoring and alerting for proactive issue resolution',
      features: ['Real-time Monitoring', 'Alert Configuration', 'Log Analysis', 'Performance Metrics'],
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime',
      features: ['AWS/GCP/Azure Setup', 'Migration Planning', 'Cost Optimization', 'Hybrid Solutions'],
    },
    {
      icon: Terminal,
      title: 'Automation & Scripting',
      description: 'Custom automation solutions to streamline your operations',
      features: ['Bash Scripting', 'Cron Job Setup', 'Process Automation', 'Deployment Scripts'],
    },
    {
      icon: Lock,
      title: 'Backup Solutions',
      description: 'Reliable backup and disaster recovery planning',
      features: ['Automated Backups', 'Recovery Testing', 'Offsite Storage', 'Disaster Recovery'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'System tuning and optimization for maximum efficiency',
      features: ['Resource Optimization', 'Load Balancing', 'Caching Solutions', 'Network Tuning'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Linux Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Linux administration services to keep your infrastructure secure, scalable, and performing at its best
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
