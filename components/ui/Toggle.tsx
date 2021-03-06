import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  enabled: boolean;
  size?: 'sm' | 'md';
  color?: 'indigo' | 'red';
  onChange: (enabled: boolean) => void;
  withIcon?: boolean;
}

const Toggle: React.FC<Props> = ({
  className,
  enabled,
  size = 'md',
  color = 'indigo',
  onChange,
  withIcon = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        className,
        'relative inline-flex flex-shrink-0 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2',
        `focus:ring-${color}-500`,
        {
          'h-5 w-10 group items-center justify-center ': size === 'sm',
          'h-6 w-11 border-2 border-transparent transition-colors ease-in-out duration-200 ':
            size === 'md',
        },
        {
          [`bg-${color}-600`]: enabled,
          'bg-gray-200': !enabled,
        },
      )}
      onClick={() => onChange(!enabled)}
      aria-pressed={enabled ? 'true' : 'false'}
      {...props}
    >
      <span className="sr-only">Use setting</span>
      {size === 'sm' && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bg-white w-full h-full rounded-md"
          />
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200',
              {
                [`bg-${color}-600`]: enabled,
                'bg-gray-200': !enabled,
              },
            )}
          />
        </>
      )}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none flex justify-center items-center h-5 w-5 rounded-full bg-white shadow transform ring-0 ease-in-out duration-200',
          {
            'absolute left-0 border border-gray-200 transition-transform':
              size === 'sm',
            transition: size === 'md',
          },
          {
            'translate-x-5': enabled,
            'translate-x-0': !enabled,
          },
        )}
      >
        {withIcon && (
          <>
            <span
              className={cn(
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                {
                  'opacity-0 ease-out duration-100': enabled,
                  'opacity-100 ease-in duration-200': !enabled,
                },
              )}
              aria-hidden="true"
            >
              <svg
                className="bg-white h-3 w-3 text-gray-400"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={cn(
                'opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                {
                  'opacity-100 ease-in duration-200': enabled,
                  'opacity-0 ease-out duration-100': !enabled,
                },
              )}
              aria-hidden="true"
            >
              <svg
                className={`bg-white h-3 w-3 text-${color}-600`}
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </>
        )}
      </span>
    </button>
  );
};

export default Toggle;
