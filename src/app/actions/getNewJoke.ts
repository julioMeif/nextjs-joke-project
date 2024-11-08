// src/app/actions/getNewJoke.ts

"use server"; // Ensures this is treated as a server-side action in Next.js

export async function getNewJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random', {
    cache: 'no-store', // Prevents caching to always get a fresh joke
  });
  const data = await response.json();
  return data.value; // Return the joke text
}
