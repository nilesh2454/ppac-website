import { MapPin, Mail, Link as LinkIcon, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    School of Computer Sciences<br />
                    KBCNMU Jalgaon<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base break-all">ppac@kbcnmu.ac.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base break-all">+918010532454</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/activities" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Activities</a></li>
              <li><a href="/placement-info" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Placement Info</a></li>
              <li><a href="/study-materials" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Study Materials</a></li>
              <li><a href="/alumni" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Alumni Network</a></li>
            </ul>
          </div>

          {/* University Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">University</h3>
            <div className="space-y-3">
              <a 
                href="https://nmu.ac.in/en-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                <LinkIcon className="h-4 w-4 flex-shrink-0" />
                <span>KBCNMU Official Website</span>
              </a>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4000000000005!2d75.494266!3d21.0049165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fc400000001%3A0xab13aa1ab942ca36!2sSchool%20of%20Computer%20Science%2C%20Kavayitri%20Bahinabai%20Chaudhari%20North%20Maharashtra%20University%2C%20Jalgaon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base px-4">
            © 2025 Pre-Placement Activity Club, School of Computer Sciences, KBCNMU Jalgaon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
