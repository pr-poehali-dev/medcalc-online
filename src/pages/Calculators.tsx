
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const Calculators = () => {
  const calculatorCategories = [
    {
      id: "ra",
      title: "Ревматоидный артрит",
      description: "Калькуляторы для оценки активности ревматоидного артрита",
      calculators: [
        { name: "DAS28", description: "Disease Activity Score на 28 суставов" },
        { name: "SDAI", description: "Simplified Disease Activity Index" },
        { name: "CDAI", description: "Clinical Disease Activity Index" }
      ],
      icon: "Activity",
      link: "/rheumatoid-arthritis"
    },
    {
      id: "lupus",
      title: "Системная красная волчанка",
      description: "Калькуляторы для оценки активности системной красной волчанки",
      calculators: [
        { name: "SLEDAI", description: "SLE Disease Activity Index" },
        { name: "BILAG", description: "British Isles Lupus Assessment Group" }
      ],
      icon: "ShieldAlert",
      link: "/lupus"
    },
    {
      id: "ssc",
      title: "Системная склеродермия",
      description: "Калькуляторы для оценки активности системной склеродермии",
      calculators: [
        { name: "mRSS", description: "modified Rodnan Skin Score" },
        { name: "Valentini", description: "European Scleroderma Study Group Activity Index" }
      ],
      icon: "ScanFace",
      link: "/scleroderma"
    },
    {
      id: "as",
      title: "Анкилозирующий спондилит",
      description: "Калькуляторы для оценки активности анкилозирующего спондилита",
      calculators: [
        { name: "BASDAI", description: "Bath Ankylosing Spondylitis Disease Activity Index" },
        { name: "ASDAS", description: "Ankylosing Spondylitis Disease Activity Score" }
      ],
      icon: "Activity",
      link: "/ankylosing-spondylitis"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Калькуляторы</h1>
          <p className="text-muted-foreground mb-8">
            Выберите заболевание и соответствующий калькулятор для оценки активности
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {calculatorCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                      <Icon name={category.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {category.calculators.map((calculator) => (
                        <div key={calculator.name} className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">{calculator.name}</span>
                            <p className="text-xs text-muted-foreground">{calculator.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={category.link}>Перейти к калькуляторам</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calculators;
