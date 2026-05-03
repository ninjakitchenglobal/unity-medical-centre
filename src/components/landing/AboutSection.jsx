import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FEATURES = [
  '24/7 Emergency Services Available',
  'Advanced Medical Technology',
  'Experienced & Certified Doctors',
  'Personalized Treatment Plans',
  'Affordable Healthcare Packages',
  'Patient-Centered Approach',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/69cb6095f4996f549409c586/af1f309b0_generated_5929d1bc.png"
                alt="CareLink modern hospital facility"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years of</div>
              <div className="text-sm font-semibold">Experience</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display leading-tight">
              We Are Committed To Your{' '}
              <span className="text-primary">Health</span> & Wellness
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              CareLink has been providing exceptional healthcare services for
              over 25 years. Our mission is to deliver compassionate,
              accessible, and high-quality medical care to every patient who
              walks through our doors.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-2">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
