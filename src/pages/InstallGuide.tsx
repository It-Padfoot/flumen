import { Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const InstallGuide = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `${import.meta.env.BASE_URL}Flumen.zip`;
    a.download = "Flumen.zip";
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
              <h2 className="text-xl font-semibold">Скачайте архив с плагином</h2>
            </div>
            <div className="pl-11 space-y-4 text-muted-foreground leading-relaxed">
              <p>Если вы ещё не скачали плагин, нажмите кнопку ниже.</p>
              <Button
                onClick={handleDownload}
                className="bg-[#167EDD] hover:bg-[#167EDD]/90 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Скачать Flumen.zip
              </Button>
            </div>
          </section>

          {/* Шаг 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="text-xl font-semibold">Распакуйте архив и запустите установщик</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>Откройте скачанный файл <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">Flumen.zip</code> и извлеките его содержимое в удобную папку.</p>
              <p>Запустите файл установщика из распакованной папки.</p>
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
                      Windows SmartScreen предупреждает о приложениях, у которых ещё не накоплена история загрузок.
                      Плагин Flumen безопасен — предупреждение появляется из-за отсутствия расширенного сертификата
                      подписи (EV-сертификат), который стоит дорого для небольших компаний.
                    </p>
                  </div>
                </div>
              </div>
              <p>Чтобы продолжить установку:</p>
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
            </div>
          </section>

          {/* Шаг 4 — Антивирус */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">4</span>
              <h2 className="text-xl font-semibold">Если антивирус заблокировал установку</h2>
            </div>
            <div className="pl-11 space-y-5 text-muted-foreground leading-relaxed">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Антивирус может заблокировать установщик как «потенциально нежелательную программу» — это ложное
                    срабатывание. Ниже — инструкции для популярных антивирусов.
                  </p>
                </div>
              </div>

              <div className="space-y-6">

                <div className="border border-border rounded-lg p-5">
                  <p className="font-semibold text-foreground mb-3">Windows Defender</p>
                  <ol className="space-y-1.5 text-sm list-decimal pl-5">
                    <li>В уведомлении «Угроза заблокирована» нажмите <strong className="text-foreground">«Подробнее»</strong></li>
                    <li>Выберите <strong className="text-foreground">«Разрешить на устройстве»</strong></li>
                    <li>Нажмите <strong className="text-foreground">«Разрешить»</strong> и запустите установщик снова</li>
                  </ol>
                </div>

                <div className="border border-border rounded-lg p-5">
                  <p className="font-semibold text-foreground mb-3">Kaspersky</p>
                  <ol className="space-y-1.5 text-sm list-decimal pl-5">
                    <li>Откройте Kaspersky → <strong className="text-foreground">Настройки → Угрозы и исключения</strong></li>
                    <li>В разделе «Исключения» нажмите <strong className="text-foreground">«Настроить исключения»</strong></li>
                    <li>Добавьте папку с установщиком Flumen в исключения</li>
                    <li>Запустите установщик снова</li>
                  </ol>
                </div>

                <div className="border border-border rounded-lg p-5">
                  <p className="font-semibold text-foreground mb-3">Dr.Web</p>
                  <ol className="space-y-1.5 text-sm list-decimal pl-5">
                    <li>В трее щёлкните правой кнопкой по значку Dr.Web</li>
                    <li>Выберите <strong className="text-foreground">«Отключить SpIDer Guard»</strong> на время установки</li>
                    <li>После завершения установки снова включите защиту</li>
                  </ol>
                </div>

                <div className="border border-border rounded-lg p-5">
                  <p className="font-semibold text-foreground mb-3">ESET NOD32</p>
                  <ol className="space-y-1.5 text-sm list-decimal pl-5">
                    <li>Откройте ESET → <strong className="text-foreground">Настройки → Дополнительно</strong></li>
                    <li>В разделе обнаружения угроз добавьте файл установщика в исключения</li>
                    <li>Запустите установщик снова</li>
                  </ol>
                </div>

              </div>
            </div>
          </section>

          {/* Шаг 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#167EDD] text-white flex items-center justify-center font-bold text-sm">5</span>
              <h2 className="text-xl font-semibold">Завершите установку и перезапустите Word</h2>
            </div>
            <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed">
              <p>Пройдите шаги установщика и дождитесь завершения.</p>
              <p>
                После установки <strong className="text-foreground">перезапустите Microsoft Word</strong> — плагин
                появится во вкладке <strong className="text-foreground">Flumen</strong> на панели инструментов.
              </p>
            </div>
          </section>

        </div>

        {/* Контакты */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">
            Возникли проблемы?{" "}
            Напишите нам в{" "}
            <a href="https://t.me/flumen_support" className="text-[#167EDD] hover:text-[#167EDD]/80 transition-colors">
              Telegram
            </a>{" "}
            или на{" "}
            <a href="mailto:info@flumen.tech" className="text-[#167EDD] hover:text-[#167EDD]/80 transition-colors">
              info@flumen.tech
            </a>{" "}
            — поможем разобраться.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstallGuide;
