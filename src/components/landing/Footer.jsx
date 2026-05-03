import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
];

const SERVICES = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Ophthalmology',
  'General Medicine',
  'Oncology',
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Heart
                  className="w-5 h-5 text-primary-foreground"
                  fill="currentColor"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Unity Medical <span className="text-primary">Centre</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed">
              Providing exceptional healthcare services with compassion and
              cutting-edge technology for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Meilahden sairaala 00290 Helsinki
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-white/60">
                  {'+1 (573) 865-5984'}
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-white/60">
                  unitymedicalcenterfinland@outlook.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2026 Unity Medical Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
