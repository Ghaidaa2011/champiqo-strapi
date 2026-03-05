import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Dumbbell,
  HeartPulse,
  Stethoscope,
  Apple,
} from "lucide-react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      icon: <Activity className="h-8 w-8" />,
    },
    {
      title: t("services.service2.title"),
      description: t("services.service2.description"),
      icon: <Dumbbell className="h-8 w-8" />,
    },
    {
      title: t("services.service3.title"),
      description: t("services.service3.description"),
      icon: <HeartPulse className="h-8 w-8" />,
    },
    {
      title: t("services.service4.title"),
      description: t("services.service4.description"),
      icon: <Stethoscope className="h-8 w-8" />,
    },
    {
      title: t("services.service5.title"),
      description: t("services.service5.description"),
      icon: <Apple className="h-8 w-8" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-foreground/70">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
