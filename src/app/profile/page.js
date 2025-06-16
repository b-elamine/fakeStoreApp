"use client";

import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken]);

  if (!accessToken) return null;

  return (
    <div>
      <h1>Bienvenue sur votre profil</h1>
      <p>Infos personnelles, commandes, etc.</p>
    </div>
  );
}
