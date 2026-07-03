import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const professions = ["инженеров", "финансистов", "юристов"];

const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProfessionIndex((currentIndex) => (currentIndex + 1) % professions.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleDownloadClick = () => {
    if (typeof window !== "undefined" && (window as any).ym) {
      (window as any).ym(107711909, "reachGoal", "download_plugin");
    }
    // window.open("#/install", "_blank");
  };

  return (
    <section id="hero" className="relative flex flex-col items-center overflow-hidden pt-24 pb-12">
      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-0">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up text-foreground">
            <span className="block">ИИ-агент в Excel и Word,</span>
            <span className="block">
              <span className="inline-block">созданный для&nbsp;</span>
              <span
                key={professions[professionIndex]}
                className="inline-block min-w-[11ch] animate-profession-rise text-left text-[#167EDD]"
              >
                {professions[professionIndex]}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Создаёт, редактирует и оформляет документы, таблицы и расчёты в Word и Excel так, как сделали бы вы сами — только быстрее и без рутины.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 bg-[#167EDD] hover:bg-[#167EDD]/90 text-white font-semibold text-lg"
            >
              <a
                href="Flumen.exe"
                download="Flumen.exe"
                onClick={handleDownloadClick}
              >
                <Download className="mr-2 h-6 w-6" />
                Скачать для Windows
              </a>
            </Button>
            {/* <a
              href="#/install"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Инструкция по установке
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
