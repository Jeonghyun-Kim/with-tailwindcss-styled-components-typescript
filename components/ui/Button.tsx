import React from 'react';
import cn from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  color?: 'indigo' | 'red';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Button: React.FC<Props> = ({
  className,
  children,
  disabled,
  color = 'indigo',
  size = 'md',
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        className,
        'inline-flex items-center border border-transparent font-medium shadow-sm',
        {
          'px-2.5 py-1.5 text-xs rounded ': size === 'xs',
          'px-3 py-2 text-sm leading-4 ounded-md': size === 'sm',
          'px-4 py-2 text-sm rounded-md': size === 'md',
          'px-4 py-2 text-base rounded-md': size === 'lg',
          'px-6 py-3 text-base rounded-md': size === 'xl',
          [`text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`]: !disabled,
          'text-gray-50 bg-gray-400 opacity-70 cursor-default': disabled,
        },
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
