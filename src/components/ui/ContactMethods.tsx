import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Card } from "./Card";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslations } from "../../hooks/useTranslations";
import type { SupportedLanguage } from "../../i18n/types";
import styles from "../../styles/animations/contact.module.css";

interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  href: string;
  description: string;
}

interface ContactMethodsProps {
  translations: Record<string, any>;
  currentLang: SupportedLanguage;
  className?: string;
}

export const ContactMethods: React.FC<ContactMethodsProps> = ({
  translations,
  currentLang,
  className = "",
}) => {
  const { t } = useTranslations(translations, currentLang);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactMethods: ContactMethod[] = [
    {
      icon: FaPhone,
      title: t("info.phone.title"),
      value: t("info.phone.value"),
      href: `tel:${t("info.phone.value")}`,
      description: t("info.phone.description"),
    },
    {
      icon: FaEnvelope,
      title: t("info.email.title"),
      value: t("info.email.value"),
      href: `mailto:${t("info.email.value")}`,
      description: t("info.email.description"),
    },
  ];

  return (
    <div className={`space-y-3 sm:space-y-4 pt-6 sm:pt-8 ${className}`} ref={ref as React.RefObject<HTMLDivElement>}>
      {contactMethods.map((method, index) => (
        <div
          key={method.title}
          className={`${isIntersecting ? styles.fadeInUp : ""} ${
            styles[`staggered${index + 4}` as keyof typeof styles]
          }`}
        >
          <Card
            variant="glass"
            padding="sm"
            className={`${styles.contactCard} group`}
            hoverable={true}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-mapea-olive/20 group-hover:bg-mapea-white/30 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors duration-300">
                <method.icon className="text-lg sm:text-xl text-mapea-olive group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base sm:text-lg font-bold text-mapea-white group-hover:text-mapea-black transition-colors duration-300 truncate">
                  {method.title}
                </h4>
                <a
                  href={method.href}
                  className="text-sm sm:text-base text-mapea-light-gray group-hover:text-mapea-black font-medium transition-colors duration-300 hover:underline block truncate"
                >
                  {method.value}
                </a>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
