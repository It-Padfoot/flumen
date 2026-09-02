import { Mail, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation();
  const contacts = [
    {
      icon: Send,
      value: "t.me/aipadfoot",
      link: "https://t.me/aipadfoot"
    },
    {
      icon: Send,
      value: "t.me/pronomous",
      link: "https://t.me/pronomous"
    },
    {
      icon: Mail,
      value: "info@flumen.tech",
      link: "mailto:info@flumen.tech"
    }
  ];

  return (
    <section id="contacts" className="py-32 bg-gradient-to-br from-[#EDF6FF] to-[#E3F2FD]">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Left border accent */}
          <div className="border-l-4 border-[#167EDD] pl-12">
            {/* Title */}
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight text-foreground transition-all duration-700 ease-out ${
                titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Мы <span className="text-[#167EDD]">всегда рады</span> общению с нашими пользователями ❤️
            </h2>

            {/* Contact Links */}
            <div ref={linksRef} className="flex flex-wrap gap-12 items-center">
              {contacts.map((contact, index) => (
                <a
                  key={contact.value}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 group hover:scale-105 transition-all duration-700 ease-out ${
                    linksVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: linksVisible ? `${index * 150}ms` : "0ms"
                  }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#167EDD] flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <contact.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Contact Value */}
                  <span className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-[#167EDD] transition-colors duration-300">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
