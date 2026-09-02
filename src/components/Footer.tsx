import footerLogo from "@/assets/footer-logo.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "@/hooks/use-active-section";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection();

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[#2B3746] text-white py-16">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2">
                  <img src={footerLogo} alt="Flumen" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold">ООО «Пенна»</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ПЕННА»
                <br />
                Разработчик программного обеспечения Flumen (Frankie).
                <br />
                <br />
                Юридический адрес: 196608, г. Санкт-Петербург, вн.тер.г. город Пушкин,
                ул. Железнодорожная, д. 8 к. 2 литера А, кв. 1.
                <br />
                ИНН: 7817141890. КПП: 781701001. ОГРН: 1247800123471.
                <br />
                Основной ОКВЭД: 62.01 — Разработка компьютерного программного обеспечения.
                <br />
                Вид ИТ-деятельности (приказ № 449): код 1.01 — проектирование, разработка,
                адаптация и сопровождение программ для ЭВМ и баз данных.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-6">Навигация</h4>
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick("hero")}
                  className={`transition-colors duration-200 text-left ${
                    activeSection === "hero" ? "text-[#167EDD]" : "text-white/40 hover:text-white"
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => handleNavClick("about")}
                  className={`transition-colors duration-200 text-left ${
                    activeSection === "about" ? "text-[#167EDD]" : "text-white/40 hover:text-white"
                  }`}
                >
                  О проекте
                </button>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className={`transition-colors duration-200 text-left ${
                    activeSection === "pricing" ? "text-[#167EDD]" : "text-white/40 hover:text-white"
                  }`}
                >
                  Подписки
                </button>
                <button
                  onClick={() => handleNavClick("accreditation")}
                  className={`transition-colors duration-200 text-left ${
                    activeSection === "accreditation"
                      ? "text-[#167EDD]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  Реквизиты
                </button>
                <button
                  onClick={() => handleNavClick("contacts")}
                  className={`transition-colors duration-200 text-left ${
                    activeSection === "contacts"
                      ? "text-[#167EDD]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  Контакты
                </button>
              </nav>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://t.me/flumen_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                >
                  Telegram
                </a>
                <a
                  href="mailto:info@aipenna.ru"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                >
                  info@aipenna.ru
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Юридическая информация</h4>
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/privacy-policy"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  to="/terms-of-use"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                >
                  Условия использования
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
