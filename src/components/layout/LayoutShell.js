"use client";

import { usePathname } from "next/navigation";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <main className={ ""}>
        {children}
      </main>
    </>
  );
}
