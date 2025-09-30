import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { useTranslations } from "../../hooks/useTranslations";
import type { SupportedLanguage } from "../../i18n/types";
import styles from "../../styles/animations/contact.module.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormProps {
  translations: Record<string, any>;
  commonTranslations: Record<string, any>;
  currentLang: SupportedLanguage;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  translations,
  commonTranslations,
  currentLang,
  className = "",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslations(translations, currentLang);
  const { t: tCommon } = useTranslations(commonTranslations, currentLang);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsError(false);
      
      // Get Formspree endpoint from environment variable
      const formspreeEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT_MAPEA;
      
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint not configured');
      }

      // Send data to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setIsError(true);
      
      // Reset error message after 5 seconds
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <div className={`space-y-6 lg:space-y-8 ${className}`}>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-mapea-white">
        {t("form.title")}
      </h3>

      {isSubmitted && (
        <div className="bg-mapea-olive/20 border border-mapea-olive/40 text-mapea-white px-4 py-3 rounded mb-6 flex items-center">
          <FaCheckCircle className="mr-2" />
          {t("form.success")}
        </div>
      )}

      {isError && (
        <div className="bg-red-500/20 border border-red-500/40 text-red-200 px-4 py-3 rounded mb-6 flex items-center">
          <FaExclamationTriangle className="mr-2" />
          {t("form.error")}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        <FormField
          id="name"
          type="text"
          placeholder={t("form.name.placeholder")}
          register={register}
          validation={{ required: t("form.name.required") }}
          error={errors.name}
          className={styles.inputField}
        />

        <FormField
          id="phone"
          type="tel"
          placeholder={t("form.phone.placeholder")}
          register={register}
          className={styles.inputField}
        />

        <FormField
          id="email"
          type="email"
          placeholder={t("form.email.placeholder")}
          register={register}
          validation={{
            required: t("form.email.required"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("form.email.invalid"),
            },
          }}
          error={errors.email}
          className={styles.inputField}
        />

        <FormField
          id="message"
          type="textarea"
          placeholder={t("form.message.placeholder")}
          register={register}
          validation={{ required: t("form.message.required") }}
          error={errors.message}
          className={styles.inputField}
          rows={5}
        />

        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={isSubmitting}
          className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {tCommon("messages.loading")}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <FaPaperPlane className="mr-2" />
              {t("form.submit")}
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};
