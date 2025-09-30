import React from 'react';
import { type FieldError } from 'react-hook-form';

interface FormFieldProps {
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea';
  placeholder?: string;
  register: any;
  validation?: any;
  error?: FieldError;
  className?: string;
  rows?: number;
  disabled?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  register,
  validation,
  error,
  className = '',
  rows = 4,
  disabled = false,
}) => {
  const baseClasses = `w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-mapea-olive focus:border-transparent transition-all duration-300 ${className}`;
  
  const textareaClasses = `w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-mapea-olive focus:border-transparent transition-all duration-300 resize-none ${className}`;

  if (type === 'textarea') {
    return (
      <div>
        <textarea
          {...register(id, validation)}
          id={id}
          rows={rows}
          disabled={disabled}
          className={textareaClasses}
          placeholder={placeholder}
        />
        {error && (
          <p className="mt-1 text-sm text-red-400">{error.message}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <input
        {...register(id, validation)}
        type={type}
        id={id}
        disabled={disabled}
        className={baseClasses}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error.message}</p>
      )}
    </div>
  );
};







