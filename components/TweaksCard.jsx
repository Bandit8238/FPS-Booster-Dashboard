import { Card, CardContent } from "@/components/ui/card";
import { SIMULATED_TWEAKS } from "../config/tweaks";

export default function TweaksCard() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2>System Tweaks</h2>

        {SIMULATED_TWEAKS.map((t, i) => (
          <p key={i}>- {t}</p>
        ))}
      </CardContent>
    </Card>
  );
}
