"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-50">
      <div className="mx-auto max-w-md space-y-8 px-4 text-center">
        <div className="space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>

          <h2 className="text-2xl font-semibold text-primary-800">
            Nešto je pošlo po zlu
          </h2>

          <p className="leading-relaxed text-primary-600">
            {error?.message ||
              "Dogodila se neočekivana greška. Molimo pokušajte ponovo."}
          </p>
        </div>

        <button onClick={() => reset()} className="btn-primary">
          Pokušaj ponovo
        </button>
      </div>
    </div>
  );
}
