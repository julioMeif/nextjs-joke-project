// src/app/page.tsx

import JokeComponent from '../components/JokeComponent'; // Import the client component
import { getNewJoke } from './actions/getNewJoke'; // Import the Server Action

export default async function HomePage() {
  // Fetch the initial joke server-side for the initial render
  const initialJoke = await getNewJoke();

  // Render the client component with the initial joke
  return <JokeComponent initialJoke={initialJoke} />;
}
