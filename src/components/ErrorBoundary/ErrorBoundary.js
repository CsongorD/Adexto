"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorBoundary() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (pathname?.includes("//")) {
        const cleanPath = window.location.pathname.replace(/\/+/g, "/");
        // Use push instead of replace to avoid the DOMException
        router.push(cleanPath);
      }
    } catch (error) {
      // Fallback to 404 page if error occurs
      router.push("/404");
    }
  }, [pathname, router]);

  return null;
}
