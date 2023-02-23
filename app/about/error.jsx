"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      this s not loadiing due to : {error.message}
      <button onClick={() => reset()}></button>
    </div>
  );
}
