"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
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