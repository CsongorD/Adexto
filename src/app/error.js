"use client"; // Ensures it's a client component
import styles from "../styles/error.module.css"; // Adjust the path as necessary
export default function GlobalError({ error, reset }) {
  return (
    <div className={styles["error-container"]}>
      <div className={styles["error-message"]}>
        <h2>Error: Something went wrong!</h2>
        <p>{error?.message || "Pokušajte ponovo kasnije."}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
