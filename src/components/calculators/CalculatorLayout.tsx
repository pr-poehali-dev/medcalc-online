
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  calculators: {
    id: string;
    name: string;
    content: React.ReactNode;
  }[];
}

export function CalculatorLayout({ title, description, calculators }: CalculatorLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Калькуляторы</CardTitle>
            <CardDescription>
              Выберите калькулятор для расчета индекса активности
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={calculators[0].id}>
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {calculators.map((calculator) => (
                  <TabsTrigger key={calculator.id} value={calculator.id}>
                    {calculator.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {calculators.map((calculator) => (
                <TabsContent key={calculator.id} value={calculator.id}>
                  {calculator.content}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
