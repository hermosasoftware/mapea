import React, { useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { NAVIGATION_ITEMS, COMPANY_INFO } from "../../data/constants";
import { Button } from "../ui/Button";
import { OptimizedImageReact } from "../ui/OptimizedImageReact";
import { MobileMenu } from "../ui/MobileMenu";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslations } from "../../hooks/useTranslations";
import type { SupportedLanguage } from "../../i18n/types";
import styles from "../../styles/animations/header.module.css";
import { ASSETS } from "../../data/assets";

interface HeaderProps {
  translations: Record<string, any>;
  navigationTranslations: Record<string, any>;
  currentLang: SupportedLanguage;
}

export const Header: React.FC<HeaderProps> = ({
  translations,
  navigationTranslations,
  currentLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, changeLanguage } = useTranslations(translations, currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${
        styles.header
      } ${
        isScrolled
          ? styles.headerScrolled + " bg-mapea-dark-gray lg:bg-mapea-white "
          : styles.headerTransparent + "backdrop-blur-3xl"
      }`}
    >
      <nav className="max-w-7xl w-full lg:w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`flex items-center ${styles.logo} w-36 md:hidden`}>
            {/* Logo único para mobile */}
            <Button variant="ghost" size="default" onClick={handleLogoClick}>
              <OptimizedImageReact
                src={ASSETS.logos.mapeaTrueLogo}
                alt="Mapea"
                width={120}
                height={48}
                className="h-12 w-auto object-contain block md:hidden"
                loading="eager"
              />
            </Button>
          </div>

          {/* Desktop Navigation with Radix */}
          <div className="hidden md:flex items-center w-full">
            {/* Logo único para mobile y desktop */}
            <Button variant="ghost" size="default" onClick={handleLogoClick}>
              <OptimizedImageReact
                src={
                  isScrolled
                    ? ASSETS.logos.mapeaTrueDarkLogo
                    : ASSETS.logos.mapeaTrueLogo
                }
                alt="Mapea"
                width={120}
                height={48}
                className="h-10 lg:h-12 w-auto object-contain"
                loading="eager"
              />
            </Button>
            <NavigationMenu.Root className={styles.navigationMenuRoot}>
              <NavigationMenu.List className={styles.navigationMenuList}>
                {NAVIGATION_ITEMS.map((item) => (
                  <NavigationMenu.Item key={item.id}>
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      duration={800}
                      spy={true}
                      activeClass={styles.navItemActive}
                      onSetActive={(to: string) => setActiveSection(to)}
                      className={`${styles.navigationMenuTrigger} ${
                        styles.navItem
                      } ${
                        activeSection === item.id ? styles.navItemActive : ""
                      } ${
                        isScrolled
                          ? "text-mapea-dark-gray hover:text-mapea-olive"
                          : "text-white/75 hover:text-mapea-olive"
                      }`}
                    >
                      {navigationTranslations[item.id] || item.label}
                    </ScrollLink>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>

            <div className="ml-8">
              <ScrollLink to="contact" smooth={true} duration={800}>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${styles.ctaButton} ${
                    isScrolled
                      ? "border-mapea-olive text-mapea-olive hover:bg-mapea-olive hover:text-black"
                      : "border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {t("buttons.getQuote")}
                </Button>
              </ScrollLink>
            </div>

            {/* Language Switcher - Desktop */}
            <div className="ml-4">
              <LanguageSwitcher
                variant="minimal"
                currentLang={currentLang}
                onChangeLanguage={changeLanguage}
                isScrolled={isScrolled}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className={`${styles.hamburger} ${
                isOpen ? styles.hamburgerActive : ""
              } ${
                isScrolled
                  ? "text-mapea-white hover:text-mapea-olive"
                  : "text-white hover:text-mapea-olive"
              } transition-colors duration-300 p-2 rounded-lg`}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu with Radix Dialog */}
        <MobileMenu
          isOpen={isOpen}
          onClose={closeMenu}
          isScrolled={isScrolled}
          activeSection={activeSection}
          currentLang={currentLang}
          changeLanguage={changeLanguage}
        />
      </nav>
    </header>
  );
};
