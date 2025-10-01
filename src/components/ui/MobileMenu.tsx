import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Link as ScrollLink } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { NAVIGATION_ITEMS } from '../../data/constants';
import styles from '../../styles/animations/header.module.css';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { SupportedLanguage } from '../../i18n/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  activeSection: string;
  currentLang: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isScrolled,
  activeSection,
  currentLang,
  changeLanguage,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={`${styles.mobileMenuOverlay} ${isOpen ? styles.mobileMenuOverlayVisible : ''}`} />
        <Dialog.Content className={`${styles.mobileMenuContent} ${isOpen ? styles.mobileMenuContentVisible : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-mapea-dark-gray">Menu</h2>
            <div className="md:hidden flex items-center space-x-4">
              {/* Language Switcher - Mobile */}
              <LanguageSwitcher 
              variant="minimal" 
              currentLang={currentLang}
              onChangeLanguage={changeLanguage}
              isScrolled={isScrolled}
              className="text-black hover:text-mapea-olive"
            />
            </div>
            <Dialog.Close asChild>
              <button
                className={`${styles.mobileMenuClose} p-2 rounded-lg transition-colors duration-300`}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </Dialog.Close>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 p-6">
            {NAVIGATION_ITEMS.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="mobileNavActive"
                onClick={onClose}
                className={`${styles.mobileNavItem} ${
                  activeSection === item.id 
                    ? 'bg-mapea-olive/10 text-mapea-olive font-semibold border-l-4 border-mapea-olive' 
                    : 'text-mapea-dark-gray hover:text-mapea-olive hover:bg-gray-50'
                } font-medium text-left transition-all duration-200 py-3 px-4 rounded-lg`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              onClick={onClose}
            >
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-mapea-olive text-mapea-olive hover:bg-mapea-olive hover:text-white"
              >
                Get Quote
              </Button>
            </ScrollLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};