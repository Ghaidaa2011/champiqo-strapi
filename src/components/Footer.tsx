import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      url: "https://www.facebook.com/mohamed.ahmed.768467#",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://www.instagram.com/champiqo.eg/",
      color:
        "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90",
    },
    // {
    //   name: "Twitter",
    //   icon: <Twitter />,
    //   url: "#",
    //   color: "bg-sky-500 text-white hover:bg-sky-600",
    // },
    // {
    //   name: "LinkedIn",
    //   icon: <Linkedin />,
    //   url: "#",
    //   color: "bg-blue-700 text-white hover:bg-blue-800",
    // },
    // {
    //   name: "GitHub",
    //   icon: <Github />,
    //   url: "#",
    //   color: "bg-gray-800 text-white hover:bg-gray-900",
    // },
    {
      name: "Tiktok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.22-.15-.42-.32-.61-.51V15c.02 1.43-.51 2.85-1.49 3.89-1.31 1.46-3.4 2.15-5.32 1.81-1.92-.34-3.56-1.85-4.1-3.69-.53-1.74-.2-3.75 1-5.18 1.05-1.25 2.67-2.01 4.3-1.97.2 0 .4 0 .6.03v4.03c-1.3-.23-2.74.21-3.51 1.25-.43.59-.57 1.34-.39 2.05.21.84.97 1.53 1.83 1.71.86.18 1.82-.04 2.45-.66.52-.51.79-1.23.77-1.94V.02z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@drmohamedelgorany?_r=1&_t=ZS-93EFgQp0G3U",
      color: "bg-black text-white hover:bg-gray-800",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle />,
      url: "https://wa.me/+201558155330",
      color: "bg-green-500 text-white hover:bg-green-600",
    },
  ];

  const footerLinks = [
    { name: t("footer.links.privacy"), url: "#" },
    { name: t("footer.links.terms"), url: "#" },
  ];

  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#" className="text-2xl font-bold text-primary">
              Champniqo
            </a>
          </div>

          <div className="flex space-x-4 rtl:space-x-reverse mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${link.color}`}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center space-x-4 rtl:space-x-reverse mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-foreground/60 text-sm">
            <p>
              {t("footer.copyright").replace("2023", currentYear.toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
