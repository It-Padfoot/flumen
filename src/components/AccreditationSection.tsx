import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AccreditationSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="accreditation" className="py-20 bg-[#F7FAFC]">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div
            ref={headerRef}
            className={`mb-10 space-y-3 transition-all duration-700 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-wide text-[#167EDD]">
              Сведения для аккредитации ИТ-организации
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              ООО «Пенна» — разработчик программного обеспечения
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              ООО «Пенна» разрабатывает программное обеспечение Flumen (Frankie) —
              ИИ-агент для работы с документами и таблицами в Microsoft Word и Excel,
              ориентированный в том числе на инженеров и другие профессиональные роли.
            </p>
          </div>

          <div
            ref={contentRef}
            className={`grid gap-6 md:grid-cols-2 transition-all duration-700 ease-out ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Реквизиты</h3>
              <div className="space-y-2 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  <span className="font-medium text-foreground">Полное наименование:</span>
                  <br />
                  ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ПЕННА»
                </p>
                <p>
                  <span className="font-medium text-foreground">Сокращённое наименование:</span>
                  <br />
                  ООО «Пенна»
                </p>
                <p>
                  <span className="font-medium text-foreground">ИНН:</span> 7817141890
                  <br />
                  <span className="font-medium text-foreground">КПП:</span> 781701001
                  <br />
                  <span className="font-medium text-foreground">ОГРН:</span> 1247800123471
                </p>
                <p>
                  <span className="font-medium text-foreground">Юридический адрес:</span>
                  <br />
                  196608, г. Санкт-Петербург, вн.тер.г. город Пушкин, ул. Железнодорожная,
                  д. 8 к. 2 литера А, кв. 1
                </p>
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a href="mailto:info@aipenna.ru" className="text-[#167EDD] hover:underline">
                    info@aipenna.ru
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Вид деятельности</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  <span className="font-medium text-foreground">Основной ОКВЭД:</span>
                  <br />
                  62.01 — Разработка компьютерного программного обеспечения
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Вид ИТ-деятельности (приказ Минцифры № 449):
                  </span>
                  <br />
                  код 1.01 — проектирование, разработка, адаптация, модификация и
                  сопровождение программ для ЭВМ и баз данных (включая визуальные
                  пользовательские интерфейсы)
                </p>
                <p>
                  ООО «Пенна» осуществляет разработку, адаптацию и сопровождение
                  собственного программного продукта Flumen.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Продукт и цены</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  <span className="font-medium text-foreground">Продукт:</span> Flumen (Frankie) —
                  десктопный ИИ-агент для Microsoft Word и Excel. Создаёт, редактирует и
                  оформляет документы и таблицы, анализирует файлы и папки, помогает
                  инженерам и другим специалистам ускорить работу с документами без рутины.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium text-foreground">Пробный:</span> 0 ₽/мес
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Профессиональный:</span>{" "}
                    1500 ₽/мес
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Технологический стек</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Маркетинговый сайт и клиентская часть построены на современном веб-стеке;
                  продукт включает десктопное приложение для Windows и работу с моделями ИИ
                  (LLM) для агентных сценариев в Word/Excel.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TypeScript, React, Vite</li>
                  <li>Tailwind CSS, shadcn/ui</li>
                  <li>Десктопное приложение для Windows (интеграция с Word/Excel)</li>
                  <li>ИИ-агент на базе больших языковых моделей (LLM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
