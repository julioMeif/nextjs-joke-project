// src/components/JokeComponent.tsx

'use client';

import { useState, useTransition } from 'react';
import { getNewJoke } from '../app/actions/getNewJoke';

type JokeComponentProps = {
  initialJoke: string;
};

export default function JokeComponent({ initialJoke }: JokeComponentProps) {
  const [joke, setJoke] = useState(initialJoke);
  const [isPending, startTransition] = useTransition();

  const handleNewJoke = () => {
    startTransition(async () => {
      const newJoke = await getNewJoke(); // Trigger the Server Action
      setJoke(newJoke); // Update the state with the new joke
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold text-blue-600">Random Joke</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">{joke}</p>
      <button
        onClick={handleNewJoke}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        disabled={isPending}
      >
        {isPending ? 'Loading...' : 'Get a New Joke'}
      </button>
    </div>
  );
}
