"use client";

import { usePathname } from 'next/navigation';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <div className={`flex flex-row items-center justify-center w-full mx-auto md:min-h-screen relative z-10 ${
      isDashboard ? '' : 'max-w-7xl'
    }`}>
      {children}
    </div>
  );
}
