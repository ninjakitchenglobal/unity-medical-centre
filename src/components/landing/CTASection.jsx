import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Emergency Line", value: "+1 (573) 865-5984" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8AM - 8PM" },
  { icon: MapPin, label: "Location", value: "123 Health Avenue, NY" },
];

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground font-display leading-tight">
              Ready To Get Started With Better Healthcare?
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-lg">
              Schedule your appointment today and take the first step towards a healthier you. 
              Our team is ready to provide you with world-class medical care.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-white text-primary hover:bg-white/90 shadow-lg font-semibold"
            >
              Book Appointment Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">{item.label}</div>
                  <div className="text-lg font-semibold text-primary-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTASection