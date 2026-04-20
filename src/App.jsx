import { useState } from "react";
import { Button } from "@/components/ui/button";
import StatusCard from "./components/StatusCard";
import GameOptimizer from "./components/GameOptimizer";
import TweaksCard from "./components/TweaksCard";
import { useFpsCpu } from "./hooks/useFpsCpu";

export default function App() {
  const [optimized, setOptimized] = useState(false);
  const [game, setGame] = useState("Fortnite");

  const { fps, cpu } = useFpsCpu(optimized);

  const runOptimization = () => {
    setOptimized(true);
    setTimeout(() => setOptimized(false), 5000);
  };

  return (
    <div className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold">FPS Booster Dashboard</h1>

      <StatusCard fps={fps} cpu={cpu} optimized={optimized} />

      <Button onClick={runOptimization}>
        Boost Performance
      </Button>

      <GameOptimizer game={game} setGame={setGame} />
      <TweaksCard />
    </div>
  );
}
