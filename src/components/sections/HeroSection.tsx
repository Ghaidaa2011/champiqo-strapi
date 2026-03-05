import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SendIcon } from "lucide-react";
import champiqo from "@/assets/champiqo.jpeg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center section relative"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.span
              className="text-lg text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t("hero.greeting")}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("hero.name")}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("hero.title")}
            </motion.h2>

            <motion.p
              className="text-lg text-foreground/70 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg">
                <a href="#specialists">
                  {t("hero.cta")}
                  <ArrowDownIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  {t("hero.contactCta")}
                  <SendIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-tr from-primary/20 to-primary/50 p-1">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
                <img
                  src={champiqo}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
