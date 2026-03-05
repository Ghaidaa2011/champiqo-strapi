import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [
    {
      name: t("navigation.home"),
      href: "#home",
    },
    {
      name: t("navigation.about"),
      href: "#about",
    },
    {
      name: t("navigation.services"),
      href: "#services",
    },
    {
      name: t("navigation.specialists"),
      href: "#specialists",
    },
    // {
    //   name: t("navigation.testimonials"),
    //   href: "#testimonials",
    // },
    {
      name: t("navigation.blog"),
      href: "#collaboration",
    },
    {
      name: t("navigation.contact"),
      href: "#contact",
    },
  ];
  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <nav className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-primary flex items-center gap-2"
          aria-label="Home"
        >
          <span className="hidden sm:inline">CHAMPIQO CLINIC</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            onClick={toggleLanguage}
            aria-label={
              language === "en" ? "Switch to Arabic" : "Switch to English"
            }
            className="text-xs font-medium h-10 w-10 p-0"
          >
            {language === "en" ? "AR" : "EN"}
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-center"
            >
              <div className="relative w-6 h-5 flex">
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current top-2 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ScrollArea className="h-64">
          <div className="container py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.header>
  );
};
export default Header;
