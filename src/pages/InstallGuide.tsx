import { Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const InstallGuide = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Flumen.exe";
    a.download = "Flumen.exe";
    a.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-16 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 mt-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>

        <p className="text-sm text-muted-foreground mb-4">Начало работы</p>
        <h1 className="text-4xl font-bold mb-4">Инструкция по установке</h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Следуйте этим шагам, чтобы установить плагин Flumen для Microsoft Word.
        </p>

        <div className="space-y-10">

          {/* Шаг 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="text-xl font-semibold">Скачайте установщик</h2>
            </div>
            <div className="pl-11 space-y-4 text-muted-foreground leading-relaxed">
              <p>Если вы ещё не скачали плагин, нажмите кнопку ниже.</p>
              <Button
                onClick={handleDownload}
                className="bg-[#167EDD] hover:bg-[#167EDD]/90 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Скачать Flumen.exe
              </Button>
            </div>
          </section>

          {/* Шаг 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="text-xl font-semibold">Запустите установщик</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>Откройте скачанный файл <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">Flumen.exe</code>.</p>
              <p>Если Windows покажет предупреждение безопасности, разрешите запуск и продолжите установку по шагам ниже.</p>
            </div>
          </section>

          {/* Шаг 3 — SmartScreen */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">3</span>
              <h2 className="text-xl font-semibold">Если Windows SmartScreen предупреждает об установке</h2>
            </div>
            <div className="pl-11 space-y-4 text-muted-foreground leading-relaxed">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Почему появляется это предупреждение?</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Windows SmartScreen предупреждает о приложениях, у которых ещё не накоплена история загрузок,
                      плагин Flumen безопасен.
                    </p>
                  </div>
                </div>
              </div>
              <p>Чтобы продолжить установку (например, в Windows 10):</p>
              <ol className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>В окне SmartScreen нажмите <strong className="text-foreground">«Подробнее»</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Нажмите <strong className="text-foreground">«Выполнить в любом случае»</strong></span>
                </li>
              </ol>
              <div className="grid gap-4 md:grid-cols-2">
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/smartscreen-more.png"
                    alt="Окно SmartScreen с кнопкой Подробнее"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/smartscreen-run-anyway.png"
                    alt="Окно SmartScreen с кнопкой Выполнить в любом случае"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* Шаг 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">4</span>
              <h2 className="text-xl font-semibold">Пройдите шаги мастера установки</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>Далее следуйте шагам мастера установки в этом порядке:</p>
              <ol className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Нажмите <strong className="text-foreground">«Установить»</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Подтвердите запуск и нажмите <strong className="text-foreground">«Установить»</strong> второй раз</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Примите условия лицензионного соглашения</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Укажите папку установки (или оставьте путь по умолчанию)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Дождитесь завершения установки и откройте Microsoft Word</span>
                </li>
              </ol>
              <div className="grid gap-4 sm:grid-cols-2">
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/setup-first.png"
                    alt="Экран установщика Flumen с кнопкой Установить"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/setup-install-button.png"
                    alt="Экран мастера с кнопкой Установить"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/setup-license.png"
                    alt="Экран лицензионного соглашения"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/setup-folder.png"
                    alt="Экран выбора папки установки"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
                <figure className="rounded-lg border border-border p-2 bg-card">
                  <img
                    src="/install-guide/setup-finish-open-word.png"
                    alt="Экран завершения установки с запуском Microsoft Word"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div className="pt-2">
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-3">
                      <p className="text-amber-900">
                        <strong className="text-amber-900">Если установка завершилась с ошибкой:</strong>{" "}
                        пришлите логи в Telegram{" "}
                        <a href="https://t.me/aipadfoot" className="text-[#167EDD] hover:text-[#167EDD]/80 transition-colors">
                          @aipadfoot
                        </a>{" "}
                        или{" "}
                        <a href="https://t.me/pronomous" className="text-[#167EDD] hover:text-[#167EDD]/80 transition-colors">
                          @pronomous
                        </a>{" "}
                        — оперативно поможем решить проблему. Логи возьмите по ссылке
                        <strong className="text-amber-900"> «в файле журнала»</strong> в окне ошибки.
                      </p>
                      <figure className="rounded-lg border border-amber-200 p-2 bg-white max-w-md">
                        <img
                          src="/install-guide/setup-error-log.png"
                          alt="Окно ошибки установки с ссылкой на файл журнала"
                          className="w-full rounded-md"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Шаг 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">5</span>
              <h2 className="text-xl font-semibold">Проверьте, что плагин открыт в Word</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>После запуска Word плагин Flumen должен открыться справа в первом открытом документе.</p>
              <p>Если панель не появилась автоматически:</p>
              <ol className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Откройте вкладку <strong className="text-foreground">«Вставка»</strong> в Word</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Нажмите <strong className="text-foreground">«Надстройки» / «Мои надстройки»</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#167EDD] flex-shrink-0 mt-1" />
                  <span>Выберите <strong className="text-foreground">Flumen</strong> и нажмите <strong className="text-foreground">«Открыть»</strong></span>
                </li>
              </ol>
              <figure className="rounded-lg border border-border p-2 bg-card">
                <img
                  src="/install-guide/word-plugin-panel.png"
                  alt="Word с открытой правой панелью плагина Flumen"
                  className="w-full rounded-md"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>

          {/* Шаг 6 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">6</span>
              <h2 className="text-xl font-semibold">Пройдите авторизацию</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>В открывшейся панели Flumen введите email и пароль от вашего аккаунта.</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstallGuide;
