import Image from "next/image";
import Link from "next/link";
import { 
  FiGlobe, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram 
} from "react-icons/fi";

const footerLinks = {
  Platform: [
    { label: "Courses", href: "/courses" },
    { label: "Mentorship", href: "/mentorship" },
    { label: "Skill Assessments", href: "/assessments" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Help Center", href: "/help" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#914C00]/20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          
          
          <div className="col-span-1 md:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-extrabold text-[15px] text-gray-900"
            >
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              SkillSphere
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[300px]">
              Empowering the next generation of digital creators with
              world-class education and industry-standard tools.
            </p>
            
            
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-gray-900">Contact Info</h3>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:info@skillsphere.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#914C00] transition-colors">
                  <FiMail className="w-4 h-4" /> info@skillsphere.com
                </a>
                <a href="tel:+880123456789" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#914C00] transition-colors">
                  <FiPhone className="w-4 h-4" /> +880 1234 567 890
                </a>
                <p className="flex items-start gap-2 text-sm text-gray-500">
                  <FiMapPin className="w-4 h-4 mt-1" /> Savar, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

         
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1 space-y-4">
              <h3 className="text-sm font-bold text-gray-900">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#914C00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-400 text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} SkillSphere Academy. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5 order-1 sm:order-2">
            <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#1877F2] transition-colors">
              <FiFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
              <FiTwitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#E4405F] transition-colors">
              <FiInstagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Website" className="text-gray-400 hover:text-[#914C00] transition-colors border-l pl-5 ml-2 border-gray-200">
              <FiGlobe className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;