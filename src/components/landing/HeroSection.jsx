import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '25+', label: 'Years Experience', icon: Award },
  { value: '140+', label: 'Expert Doctors', icon: Users },
  { value: '50k+', label: 'Happy Patients', icon: Star },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Trusted Healthcare Provider
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
              We Are Here To <span className="text-primary">Hear</span> And{' '}
              <span className="text-primary">Heal</span> Your Health Problems
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Providing comprehensive healthcare services with compassion and
              cutting-edge technology. Your wellness journey starts here with
              our expert medical team.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 h-13"
              >
                Get Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button className="flex items-center gap-3 group">
                <div className="w-13 h-13 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <Play className="w-5 h-5 text-primary fill-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Watch Video
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://media.base44.com/images/public/69cb6095f4996f549409c586/6240a5d67_generated_85bb3980.png"
                  alt="Professional doctor at CareLink hospital"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      100% Verified
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Professional Doctors
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-foreground">
                  4.9/5 Rating
                </div>
                <div className="text-xs text-muted-foreground">
                  2,394 Reviews
                </div>
              </div>
            </div>

            {/* Background shape */}
            <div className="absolute inset-4 bg-primary/10 rounded-3xl -z-10 transform rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
