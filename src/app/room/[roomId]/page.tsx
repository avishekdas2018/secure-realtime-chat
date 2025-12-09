"use client";

import { useParams } from "next/navigation";

const RoomPage = () => {
  const params = useParams();
  const roomId = params.roomId as string;

  return (
    <main className="flex flex-col min-h-screen max-h-screen overflow-hidden">
      <header className="border-b border-zinc-800 p-4 flex items-center justify-between bg-zinc-900/30"></header>
    </main>
  );
};

export default RoomPage;
