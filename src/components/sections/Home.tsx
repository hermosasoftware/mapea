import React, { Suspense, lazy } from "react";
import { Button } from "../ui/Button";
import { HeroTitle } from "../ui/HeroTitle";
import { DroneModelFallback } from "../3D/DroneModelFallback";
import { useTranslations } from "../../hooks/useTranslations";
import type { SupportedLanguage } from "../../i18n/types";
import { ASSETS } from "../../data/assets";
import styles from "../../styles/animations/home.module.css";

// Lazy load the heavy 3D model component
const DroneModel = lazy(() =>
  import("../3D/DroneModel").then((module) => ({ default: module.DroneModel }))
);

interface HomeProps {
  translations: Record<string, any>;
  commonTranslations: Record<string, any>;
  currentLang: SupportedLanguage;
}

export const Home: React.FC<HomeProps> = ({
  translations,
  commonTranslations,
  currentLang,
}) => {
  const { t } = useTranslations(translations, currentLang);
  const { t: tCommon } = useTranslations(commonTranslations, currentLang);

  const handleGetQuote = () => {
    // Usar navegación con History API
    const navigateToContact = () => {
      const newUrl = `/${currentLang}/contact`;
      window.history.pushState({ section: 'contact' }, '', newUrl);
      
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
    navigateToContact();
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-mapea-black text-white relative overflow-hidden"
    >
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Mobile Layout - Vertical Stack */}
          <div className="flex flex-col lg:hidden justify-center items-center min-h-screen space-y-2 text-center">
            {/* Texto Principal - Mobile */}
            <div
              className={`space-y-3 ${styles.fadeInUp} ${styles.staggered2}`}
            >
              <HeroTitle
                lines={[
                  t("hero.title.line1"),
                  t("hero.title.line2"),
                  t("hero.title.line3"),
                ]}
                highlightText="(EA)"
                highlightColor="text-mapea-olive"
                className={`${styles.fadeInUp} ${styles.staggered3}`}
                animationClass={`${styles.fadeInUp} ${styles.staggered3}`}
                size="lg"
                textAlign="center"
                spacing="tight"
              />

              <div
                className={`space-y-1 ${styles.fadeInUp} ${styles.staggered5}`}
              >
                <p className="text-lg text-mapea-light-gray">
                  {t("hero.subtitle.line1")}
                </p>
                <p className="text-base text-mapea-light-gray">
                  {t("hero.subtitle.line2")}
                </p>
              </div>
            </div>

            {/* Modelo 3D del Dron - Mobile */}
            <div
              className={`relative ${styles.scaleIn} ${styles.staggered4} w-full max-w-sm`}
            >
              <div className="w-full h-80 rounded-lg overflow-visible">
                <Suspense
                  fallback={<DroneModelFallback className="w-full h-full" />}
                >
                  <DroneModel
                    className="w-full h-full"
                    autoRotate={true}
                    enableControls={true}
                  />
                </Suspense>
              </div>
            </div>

            {/* Botón GET A QUOTE - Mobile */}
            <div className={`${styles.fadeInUp} ${styles.staggered5}`}>
              <Button
                variant="outline"
                size="lg"
                onClick={handleGetQuote}
                className="px-8 py-3 text-base border-2 border-white text-white hover:bg-mapea-olive transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
              >
                {tCommon("buttons.getQuote")}
              </Button>
            </div>
          </div>

          {/* Desktop Layout - Two Columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            {/* Columna Izquierda - Texto Principal */}
            <div
              className={`space-y-6 lg:space-y-8 ${styles.fadeInLeft} ${styles.staggered2}`}
            >
              <HeroTitle
                lines={[
                  t("hero.title.line1"),
                  t("hero.title.line2"),
                  t("hero.title.line3"),
                ]}
                highlightText="(EA)"
                highlightColor="text-mapea-olive"
                className={`${styles.fadeInUp} ${styles.staggered3}`}
                animationClass={`${styles.fadeInUp} ${styles.staggered3}`}
                size="xl"
                textAlign="left"
                spacing="normal"
              />

              <div
                className={`space-y-1 lg:space-y-2 ${styles.fadeInUp} ${styles.staggered5}`}
              >
                <p className="text-lg lg:text-xl text-mapea-light-gray">
                  {t("hero.subtitle.line1")}
                </p>
                <p className="text-base lg:text-lg text-mapea-light-gray">
                  {t("hero.subtitle.line2")}
                </p>
              </div>
            </div>

            {/* Columna Derecha - Imagen del Dron y Botón */}
            <div
              className={`flex flex-col items-center space-y-6 lg:space-y-8 ${styles.fadeInRight} ${styles.staggered3}`}
            >
              {/* Modelo 3D del Dron */}
              <div
                className={`relative ${styles.scaleIn} ${styles.staggered4}`}
              >
                <div className="w-[28rem] h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] rounded-lg overflow-visible shadow-2xl">
                  <Suspense
                    fallback={<DroneModelFallback className="w-full h-full" />}
                  >
                    <DroneModel
                      className="w-full h-full"
                      autoRotate={true}
                      enableControls={true}
                    />
                  </Suspense>
                </div>
              </div>

              {/* Botón GET A QUOTE */}
              <div className={`${styles.fadeInUp} ${styles.staggered5}`}>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={handleGetQuote}
                  className="px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg border-2 border-white text-white hover:bg-mapea-white hover:text-mapea-black transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                >
                  {tCommon("buttons.getQuote")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
