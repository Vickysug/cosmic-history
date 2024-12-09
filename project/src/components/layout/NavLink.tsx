import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-300 hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
}