import { motion } from 'framer-motion';

const DOCTORS = [
  {
    name: 'Dr. Elias Valtteri',
    specialty: 'Cardiologist',
    image:
      'https://media.base44.com/images/public/69cb6095f4996f549409c586/3872fe3f4_generated_image.png',
  },
  {
    name: 'Dr. Amira Patel',
    specialty: 'Neurologist',
    image:
      'https://media.base44.com/images/public/69cb6095f4996f549409c586/7912655ae_generated_image.png',
  },
  {
    name: 'Dr. David Chen',
    specialty: 'Orthopedic Surgeon',
    image:
      'https://media.base44.com/images/public/69cb6095f4996f549409c586/cdd227072_generated_image.png',
  },
  {
    name: 'Dr. Sarah Miller',
    specialty: 'Pediatrician',
    image:
      'https://media.base44.com/images/public/69cb6095f4996f549409c586/3924ff86f_generated_image.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
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
              Our Doctors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
              Meet Our <span className="text-primary">Expert</span> Doctors
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team of highly qualified and experienced medical professionals
              is dedicated to providing the best care possible.
            </p>
          </motion.div>
        </div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DOCTORS.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-5 bg-secondary">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {doctor.name}
              </h3>
              <p className="text-sm text-primary font-medium">
                {doctor.specialty}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;
