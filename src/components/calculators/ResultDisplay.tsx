
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/Icon";

interface ResultDisplayProps {
  title: string;
  score: number;
  interpretation: {
    text: string;
    severity: "low" | "moderate" | "high" | "remission" | "info";
  };
  details?: string;
}

export function ResultDisplay({ title, score, interpretation, details }: ResultDisplayProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "remission":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return "CheckCircle";
      case "moderate":
        return "AlertCircle";
      case "high":
        return "AlertTriangle";
      case "remission":
        return "ThumbsUp";
      default:
        return "Info";
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Результат {title}</span>
          <Badge variant="outline" className="text-lg font-semibold">
            {score.toFixed(2)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className={getSeverityColor(interpretation.severity)}>
          <Icon name={getSeverityIcon(interpretation.severity)} className="h-4 w-4" />
          <AlertTitle>Интерпретация:</AlertTitle>
          <AlertDescription>{interpretation.text}</AlertDescription>
        </Alert>
        
        {details && (
          <div className="text-sm text-muted-foreground">
            <p>{details}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
