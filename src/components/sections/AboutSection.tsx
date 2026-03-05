import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import about from "@/assets/about.jpeg";

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.experience"), value: t("about.experienceCount") },
    { label: t("about.projects"), value: t("about.projectsCount") },
    { label: t("about.clients"), value: t("about.clientsCount") },
  ];

  return (
    <section id="about" className="section bg-secondary/30 relative">
      {/* Background photo with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/60"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-foreground/70">{t("about.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-sm"
          >
            <div className="aspect-square max-w-md mx-auto rounded-lg bg-gradient-to-tr from-primary/10 to-primary/30 p-1">
              <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-300/50">
                <img
                  src={about}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-6 backdrop-blur-sm p-6 rounded-lg bg-background/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              {t("about.title")}
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-mono bg-background/30 backdrop-blur-sm"
                >
                  <CardContent className="py-4 px-1 md:p-4 text-center">
                    <p className="text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/70 ">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
