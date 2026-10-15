import React from 'react';

interface ShapackLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
}

export const ShapackLogo: React.FC<ShapackLogoProps> = ({
  className = 'w-9 h-9',
  size,
  showText = true,
  textColor = 'text-slate-900',
}) => {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src="/images/shapack_logo_icon.svg"
        alt="SHAPACK"
        className={className}
        style={size ? { width: size, height: size } : undefined}
      />
      {showText && (
        <span className={`font-black text-2xl tracking-tight ${textColor} lowercase font-sans`}>
          shapack
        </span>
      )}
    </div>
  );
};
