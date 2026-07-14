"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/me", {
          credentials: "include",
        });

        if (!res.ok) {
          router.replace("/admin/login");
          return;
        }

        setLoading(false);
      } catch (error) {
        router.replace("/admin/login");
      }
    }

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF7EF]">
        <div className="text-[#7B2334] text-xl font-serif">
          Loading Admin...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      {children}
    </div>
  );
}