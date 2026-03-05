import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ServicesSection = () => {
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/services`);
        const data = await res.json();

        setServices(data?.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>

          <p className="text-lg text-foreground/70">
            Professional physical therapy services
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <p className="text-lg text-gray-500">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="flex justify-center py-12">
            <p className="text-lg text-gray-500">
              No services available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons];

              return (
                <motion.div
                  key={service.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                        {IconComponent ? (
                          <IconComponent className="h-8 w-8" />
                        ) : (
                          <Icons.Activity className="h-8 w-8" />
                        )}
                      </div>

                      <CardTitle>{service.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-foreground/70">
                        {service.description}
                      </p>
                    </CardContent>
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

export default ServicesSection;
