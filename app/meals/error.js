'use client';

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to fetch meal data. Pleasy try again later</p>
    </main>
  );
}
