import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GAME_TIPS } from "../config/games";

export default function GameOptimizer({ game, setGame }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h2>Game Optimizer</h2>

        <Select value={game} onValueChange={setGame}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {Object.keys(GAME_TIPS).map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <ul className="mt-3">
          {GAME_TIPS[game].map((t, i) => (
            <li key={i}>• {t}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
