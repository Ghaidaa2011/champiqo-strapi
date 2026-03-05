import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CollaborationSection = () => {
  const { t } = useTranslation();

  const [collaborations, setCollaborations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/collaborations?populate=*`);
        const data = await res.json();

        setCollaborations(data?.data || []);
      } catch (error) {
        console.error("Error fetching collaborations:", error);
        setCollaborations([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollaborations();
  }, []);

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
            {t("collaboration.title", "Collaborations")}
          </h2>

          <p className="text-lg text-foreground/70">
            {t("collaboration.subtitle", "Our latest collaborations")}
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <p className="text-lg text-gray-500">Loading collaborations...</p>
          </div>
        ) : collaborations.length === 0 ? (
          <div className="flex justify-center py-12">
            <p className="text-lg text-gray-500">
              No collaborations available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((item: any, index) => {
              const imageUrl = item.image?.url
                ? `${BASE_URL}${item.image.url}`
                : "/placeholder-image.jpg";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden flex items-center justify-center">
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="w-[450px] h-[450px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <CardContent className="pt-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-primary/70">
                          {item.date}
                        </span>

                        <h3 className="text-xl font-bold">{item.title}</h3>

                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="group"
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        <span>{t("collaboration.viewMore", "View more")}</span>

                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollaborationSection;
