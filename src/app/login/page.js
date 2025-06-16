"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push("/profile");
    } catch {
      setErrorMsg("Erreur d'authentification");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Connexion</h1>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 mb-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Se connecter
      </button>
    </form>
  );
}
