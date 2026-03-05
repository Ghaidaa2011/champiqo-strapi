import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials.testimonial1.quote"),
      author: t("testimonials.testimonial1.author"),
      // company: t('testimonials.testimonial1.company'),
    },
    {
      quote: t("testimonials.testimonial2.quote"),
      author: t("testimonials.testimonial2.author"),
      // company: t('testimonials.testimonial2.company'),
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-foreground/70">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-secondary/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-10 w-10 text-primary/40 mb-4" />
                  <p className="text-lg font-medium mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <CardFooter className={"border-t pt-4 pb-0 flex"}>
                    <div className="mt-auto">
                      <p className="font-bold">{testimonial.author}</p>
                      <span className="text-yellow-400 text-base">★★★★★</span>

                      {/* <p className="text-sm text-foreground/70">{testimonial.company}</p> */}
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
