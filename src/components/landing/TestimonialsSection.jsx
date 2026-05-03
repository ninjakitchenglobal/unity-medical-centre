import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Rebecca Johnson',
    role: 'Heart Patient',
    text: 'The cardiology team at CareLink saved my life. Their dedication, expertise, and compassionate care made all the difference during my recovery.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    role: 'Orthopedic Patient',
    text: "After my knee replacement surgery, the entire team ensured I had the best rehabilitation experience. I'm back to my active lifestyle thanks to CareLink.",
    rating: 5,
  },
  {
    name: 'Linda Garcia',
    role: 'Mother of 3',
    text: "CareLink's pediatrics department has been wonderful for my children. The doctors are patient, knowledgeable, and truly care about each child's wellbeing.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
              What Our <span className="text-primary">Patients</span> Say
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real stories from real patients about their experiences with our
              healthcare team.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
