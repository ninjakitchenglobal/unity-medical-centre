import {
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Bone,
  Baby,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: Heart,
    title: 'Cardiology',
    description:
      'Expert heart care with advanced diagnostic and treatment options for all cardiac conditions.',
    color: 'bg-red-50 text-red-500',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description:
      'Comprehensive neurological care for brain, spine, and nervous system disorders.',
    color: 'bg-purple-50 text-purple-500',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description:
      'Complete eye care services from routine exams to advanced surgical procedures.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description:
      'Specialized bone and joint care for injuries, arthritis, and musculoskeletal conditions.',
    color: 'bg-amber-50 text-amber-500',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description:
      'Dedicated healthcare for infants, children, and adolescents with compassionate care.',
    color: 'bg-green-50 text-green-500',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description:
      'Primary healthcare services for preventive care, diagnosis, and treatment of common conditions.',
    color: 'bg-teal-50 text-teal-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
              We Provide Best Medical{' '}
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Explore our wide range of medical specialties and find the right
              care for you and your family.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
