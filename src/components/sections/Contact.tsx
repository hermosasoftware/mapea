import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Card } from "../ui/Card";
import { Form } from "../ui/Form";
import { ContactMethods } from "../ui/ContactMethods";
import { COMPANY_INFO } from "../../data/constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslations } from "../../hooks/useTranslations";
import type { SupportedLanguage } from "../../i18n/types";
import styles from "../../styles/animations/contact.module.css";
import { ASSETS } from "../../data/assets";

interface ContactProps {
  translations: Record<string, any>;
  commonTranslations: Record<string, any>;
  currentLang: SupportedLanguage;
}

export const Contact: React.FC<ContactProps> = ({
  translations,
  commonTranslations,
  currentLang,
}) => {
  const { t } = useTranslations(translations, currentLang);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });


  const socialLinks = [
    {
      icon: FaFacebook,
      href: COMPANY_INFO.socialMedia.facebook,
      name: "Facebook",
    },
    {
      icon: FaInstagram,
      href: COMPANY_INFO.socialMedia.instagram,
      name: "Instagram",
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 lg:py-32 bg-mapea-black"
      ref={ref}
    >
      <div className="relative section-container">
        {/* Hero Section - Dark Theme */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl lg:text-6xl font-bold text-mapea-white mb-8 ${
              isIntersecting ? styles.fadeInDown : ""
            } ${styles.staggered1} ${styles.darkGlow}`}
          >
            {t("hero.title")}
          </h2>
          <div
            className={`max-w-4xl mx-auto ${
              isIntersecting ? styles.fadeInUp : ""
            } ${styles.staggered2}`}
          >
            <p className="text-xl lg:text-2xl text-mapea-light-gray leading-relaxed mb-6">
              {t("hero.description")}
            </p>
          </div>
        </div>

        {/* Main Contact Section - Responsive Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Contact Form */}
          <div
            className={`w-full ${isIntersecting ? styles.fadeInLeft : ""} ${
              styles.staggered3
            }`}
          >
            <Form
              translations={translations}
              commonTranslations={commonTranslations}
              currentLang={currentLang}
            />
          </div>

          {/* Right Column - Image & Social */}
          <div
            className={`w-full mt-8 lg:mt-0 ${
              isIntersecting ? styles.fadeInRight : ""
            } ${styles.staggered4}`}
          >
            <div>
              {/* Sunset Image */}
              <div
                className={`relative ${styles.imageContainer} ${styles.scaleIn} ${styles.staggered5}`}
              >
                {/*video as background*/}
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-t-xl lg:rounded-t-2xl z-50"
                >
                  <source src={ASSETS.videos.contactVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Social Media Section */}
              <div
                className={` ${isIntersecting ? styles.fadeInUp : ""} ${
                  styles.staggered6
                }`}
                >
                <Card className={`bg-mapea-light-gray rounded-b-xl lg:rounded-b-2xl rounded-t-none lg:flex lg:flex-row lg:justify-around lg:items-center lg:py-2`}>
                  <h4 className="text-xl sm:text-2xl font-bold text-mapea-black mb-4 text-center pt-1 my-auto">
                    Get Social
                  </h4>
                  <div className="flex justify-center space-x-4 sm:space-x-6 pb-1">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${styles.socialIcon} rounded-full flex items-center justify-center text-mapea-black hover:text-mapea-light-gray text-xl sm:text-2xl transition-all duration-300 hover:scale-110`}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </Card>
                <ContactMethods
                  translations={translations}
                  currentLang={currentLang}
               />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
