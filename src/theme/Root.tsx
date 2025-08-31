import { useEffect } from 'react';

declare global {
  interface Window {
    Prism: any;
  }
}

export default function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
