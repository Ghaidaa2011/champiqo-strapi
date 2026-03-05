// import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";
// import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { t } = useTranslation();
  // State for form fields
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false); // Loading state for submit button
  // const formRef = useRef<HTMLFormElement>(null); // Ref for the form element

  // Handles form submission and sending email via EmailJS
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!name || !email || !message) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill out all fields",
  //       variant: "destructive",
  //     });
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     // EmailJS service configuration and sending the form
  //     const result = await emailjs.sendForm(
  //       "service_contact_form", // Service ID
  //       "template_contact", // Template ID
  //       formRef.current as HTMLFormElement, // Form reference
  //       "YOUR_PUBLIC_KEY" // Public key
  //     );
  //     console.log("Email successfully sent!", result.text);
  //     toast({
  //       title: "Message Sent",
  //       description: t("contact.successMessage"),
  //     });
  //     // Clear form fields after successful send
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //     toast({
  //       title: "Error",
  //       description: "Failed to send your message. Please try again later.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: t("contact.address"),
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: t("contact.phone"),
    },
    // {
    //   icon: <Mail className="h-5 w-5" />,
    //   label: "Email",
    //   value: "alaahegazy962002@gmail.com",
    // },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full flex flex-col justify-center  ">
              <h3 className="text-2xl font-bold mb-8 inline-block relative text-center">
                Get In Touch
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black dark:bg-white "></span>
              </h3>

              <div className="space-y-8 flex flex-col justify-center items-center w-full">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex  items-start justify-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-zinc-900 text-black dark:text-white flex items-center justify-center flex-shrink-0 border-2 border-black/20 dark:border-white/20">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-lg text-black dark:text-white w-80">
                        {info.label}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 w-80">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 p-6 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 border border-black/10 dark:border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-black dark:text-white me-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 dark:text-gray-200 italic">
                    {t("contact.responseNote")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

//  <motion.div
//    className="lg:col-span-7 order-2 lg:order-1"
//    variants={containerVariants}
//    initial="hidden"
//    whileInView="visible"
//    viewport={{ once: true }}
//  >
//    <Card className="overflow-hidden border-2 border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)] rounded-xl">
//      <CardContent className="p-8">
//        {/* Contact Form Start */}
//        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//          {/* Name Field */}
//          <motion.div variants={itemVariants}>
//            <label htmlFor="name" className="block text-sm font-medium mb-2">
//              Your Name
//            </label>
//            <Input
//              id="name"
//              name="from_name"
//              placeholder={t("contact.namePlaceholder")}
//              value={name}
//              onChange={(e) => setName(e.target.value)}
//              className="border-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-lg bg-white dark:bg-gray-900"
//              required
//            />
//          </motion.div>
//          {/* Email Field */}
//          <motion.div variants={itemVariants}>
//            <label htmlFor="email" className="block text-sm font-medium mb-2">
//              Your Email
//            </label>
//            <Input
//              id="email"
//              name="reply_to"
//              type="email"
//              placeholder={t("contact.emailPlaceholder")}
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//              className="border-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-lg bg-white dark:bg-gray-900"
//              required
//            />
//          </motion.div>
//          {/* Message Field */}
//          <motion.div variants={itemVariants}>
//            <label htmlFor="message" className="block text-sm font-medium mb-2">
//              Your Message
//            </label>
//            <Textarea
//              id="message"
//              name="message"
//              placeholder={t("contact.messagePlaceholder")}
//              value={message}
//              onChange={(e) => setMessage(e.target.value)}
//              rows={5}
//              className="border-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-lg bg-white dark:bg-gray-900"
//              required
//            />
//          </motion.div>
//          {/* Hidden field for recipient email */}
//          <input type="hidden" name="to_email" value="ghaidaahaled@gmail.com" />
//          {/* Submit Button */}
//          <motion.div
//            variants={itemVariants}
//            whileHover={{ scale: 1.02 }}
//            whileTap={{ scale: 0.98 }}
//          >
//            <Button
//              type="submit"
//              size="lg"
//              disabled={loading}
//              className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium rounded-lg transition-all duration-300 py-3"
//            >
//              {loading ? (
//                <span className="flex items-center">
//                  <svg
//                    className="animate-spin -ml-1 mr-3 h-5 w-5"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 24 24"
//                  >
//                    <circle
//                      className="opacity-25"
//                      cx="12"
//                      cy="12"
//                      r="10"
//                      stroke="currentColor"
//                      strokeWidth="4"
//                    ></circle>
//                    <path
//                      className="opacity-75"
//                      fill="currentColor"
//                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                    ></path>
//                  </svg>
//                  Sending...
//                </span>
//              ) : (
//                <span className="flex items-center justify-center">
//                  {t("contact.sendButton")}
//                  <MessageCircle className="ml-2 h-5 w-5" />
//                </span>
//              )}
//            </Button>
//          </motion.div>
//        </form>
//        {/* Contact Form End */}
//      </CardContent>
//    </Card>
//  </motion.div>
