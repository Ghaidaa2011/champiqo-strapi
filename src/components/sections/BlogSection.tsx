import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import fitGoal from "@/assets/fitGoal.jpeg";
import basketballLovers from "@/assets/basketballLovers.jpeg";
import wheelchairBasketball from "@/assets/wheelchairBasketball.jpeg";
import faramawy from "@/assets/faramawy.jpeg";
import R2 from "@/assets/R2.jpeg";

const CollaborationSection = () => {
  const { t } = useTranslation();

  const collaborations = [
    {
      title: t("collaboration.item1.title"),
      date: t("collaboration.item1.date"),
      summary: t("collaboration.item1.summary"),
      image: basketballLovers,
      url: "https://www.instagram.com/p/DU0yAe8jH-n/?img_index=1",
    },
    {
      title: t("collaboration.item2.title"),
      date: t("collaboration.item2.date"),
      summary: t("collaboration.item2.summary"),
      image: fitGoal,
      url: "https://www.instagram.com/p/DUi2aFLjGl4/",
    },
    {
      title: t("collaboration.item3.title"),
      date: t("collaboration.item3.date"),
      summary: t("collaboration.item3.summary"),
      image: wheelchairBasketball,
      url: "https://www.instagram.com/p/DVE06vWjFau/?img_index=1",
    },
    {
      title: t("collaboration.item4.title"),
      date: t("collaboration.item4.date"),
      summary: t("collaboration.item4.summary"),
      image: faramawy,
      url: "https://www.instagram.com/p/DUlEPz1jEHI/?img_index=1",
    },
    {
      title: t("collaboration.item5.title"),
      date: t("collaboration.item5.date"),
      summary: t("collaboration.item5.summary"),
      image: R2,
      url: "https://www.instagram.com/p/DVKZQZvDBBK/",
    },
  ];

  return (
    <section id="collaboration" className="section bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("collaboration.title")}
          </h2>
          <p className="text-lg text-foreground/70">
            {t("collaboration.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden flex items-center justify-center">
                  {item.image.startsWith("bg-") ? (
                    <div
                      className={`w-full h-full ${item.image} flex items-center justify-center`}
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
                            d="M8 17l4 4 4-4m0-5V3m-8 9H4m16 0h-4"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w[700px] max-h-[700px] w-[450px] h-[450px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>

                <CardContent className="pt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-primary/70">{item.date}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-foreground/70">{item.summary}</p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group"
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    <span>{t("collaboration.viewMore")}</span>
                    <ArrowRightIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
