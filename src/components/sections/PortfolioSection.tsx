import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SportsMusculoskeletal from "@/assets/SportsMusculoskeletal.jpeg";
import OnFieldAcuteCare from "@/assets/OnFieldAcuteCare.jpeg";
import StrengthConditioning from "@/assets/StrengthConditioning.jpeg";
import ClinicalRehabilitation from "@/assets/ClinicalRehabilitation.jpeg";

// import { Button } from "@/components/ui/button";
// import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";

const PortfolioSection = () => {
  const { t } = useTranslation();

  const specialists = [
    {
      title: t("specialists.specialist1.title"),
      category: t("specialists.specialist1.category"),
      description: t("specialists.specialist1.description"),
      image: SportsMusculoskeletal,
    },
    {
      title: t("specialists.specialist2.title"),
      category: t("specialists.specialist2.category"),
      description: t("specialists.specialist2.description"),
      image: OnFieldAcuteCare,
    },
    {
      title: t("specialists.specialist3.title"),
      category: t("specialists.specialist3.category"),
      description: t("specialists.specialist3.description"),
      image: StrengthConditioning,
    },
    {
      title: t("specialists.specialist4.title"),
      category: t("specialists.specialist4.category"),
      description: t("specialists.specialist4.description"),
      image: ClinicalRehabilitation,
    },
  ];

  return (
    <section id="specialists" className="section bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("specialists.title")}
          </h2>
          <p className="text-lg text-foreground/70">
            {t("specialists.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                {/* <div
                  className={`aspect-video ${specialist.image} flex items-center justify-center`}
                >
                  <div className="text-foreground/30">
                    <svg
                      className="h-12 w-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div> */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={specialist.image}
                    alt={specialist.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-primary font-medium">
                      {specialist.category}
                    </span>
                    <h3 className="text-xl font-bold">{specialist.title}</h3>
                    <p className="text-foreground/70">
                      {specialist.description}
                    </p>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="ghost" className="group">
                    <span>View Project</span>
                    <ExternalLinkIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="outline" size="lg">
            {t("specialists.viewAll")}
            <ArrowRightIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
