"use client"; // Ensures it's a client component

export default function GlobalError({ error, reset }) {
  return (
    <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
      <h2>Greška: Nešto je pošlo po zlu!</h2>
      <p>{error?.message || "Pokušajte ponovo kasnije."}</p>
      <button onClick={() => reset()}>Pokušajte ponovo</button>
    </div>
  );
}
