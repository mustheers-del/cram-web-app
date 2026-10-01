'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost' | 'darkTeal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  asAnchor = false,
  href,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6E68] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-sm md:text-base px-7 py-3.5 rounded-lg gap-2.5 shadow-sm',
  };

  const variantStyles = {
    primary:
      'bg-[#0E6E68] text-white hover:bg-[#0B3F3C] shadow-[0_2px_8px_rgba(14,110,104,0.2)] hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#F2EDE9] text-[#161513] hover:bg-[#E6E0D9] border border-[#E7DEC8]/60 shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent border border-[#0E6E68] text-[#0E6E68] hover:bg-[#0E6E68] hover:text-white',
    gold:
      'bg-[#D9A23B] text-[#161513] font-semibold hover:bg-[#c78f29] shadow-sm hover:shadow transform hover:-translate-y-0.5',
    darkTeal:
      'bg-[#0B3F3C] text-white hover:bg-[#082E2C] shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]/60',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
