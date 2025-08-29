"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900">
            Nešto je pošlo po zlu
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            {error?.message || "Dogodila se neočekivana greška. Molimo pokušajte ponovo."}
          </p>
        </div>
        
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Pokušaj ponovo
        </button>
      </div>
    </div>
  );
}