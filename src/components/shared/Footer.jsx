import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiAtSign, FiRss } from "react-icons/fi";

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
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};
const Footer = () => {
  return (
    <footer className="w-full border-t border-[#914C00]/20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-extrabold text-[15px] text-gray-900"
            >
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              SkillSphere
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
              Empowering the next generation of digital creators with
              world-class education and industry-standard tools.
            </p>
          </div>

          
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1 space-y-4">
              <h3 className="text-sm font-bold text-gray-900">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
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

        
        <div className="border-t border-gray-100 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © 2024 SkillSphere Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Website"
              className="text-gray-400 hover:text-[#914C00] transition-colors"
            >
              <FiGlobe className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              aria-label="Email"
              className="text-gray-400 hover:text-[#914C00] transition-colors"
            >
              <FiAtSign className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              aria-label="RSS"
              className="text-gray-400 hover:text-[#914C00] transition-colors"
            >
              <FiRss className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
