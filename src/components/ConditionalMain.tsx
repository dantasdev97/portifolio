"use client";

import { usePathname } from 'next/navigation';

interface ConditionalMainProps {
  children: React.ReactNode;
  desktopAnimation: boolean;
}

export function ConditionalMain({ children, desktopAnimation }: ConditionalMainProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <main className={`hidden md:block overflow-y-auto w-full mx-auto transition-all duration-500 ease-out ${
      desktopAnimation ? 'page-exit' : 'page-enter'
    } ${isDashboard ? '' : 'max-w-3xl'}`}>
      <div className="page-content-wrapper">
        {children}
      </div>
    </main>
  );
}
