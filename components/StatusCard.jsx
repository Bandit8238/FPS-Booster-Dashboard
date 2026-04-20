import { Card, CardContent } from "@/components/ui/card";

export default function StatusCard({ fps, cpu, optimized }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div>FPS: <b>{fps}</b></div>
        <div>CPU: <b>{cpu}%</b></div>
        <div>Status: {optimized ? "Optimizing ⚡" : "Stable"}</div>
      </CardContent>
    </Card>
  );
}
