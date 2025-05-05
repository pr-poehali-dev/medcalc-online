
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Icon from "@/components/ui/Icon";

const Index = () => {
  const advantages = [
    {
      title: "Точные расчеты",
      description: "Калькуляторы базируются на актуальных клинических рекомендациях и научных исследованиях",
      icon: "Calculator"
    },
    {
      title: "Быстрая оценка",
      description: "Мгновенное получение результатов для принятия клинических решений",
      icon: "Clock"
    },
    {
      title: "Интерпретация результатов",
      description: "Детальная расшифровка полученных показателей и их клиническое значение",
      icon: "FileText"
    }
  ];

  const diseases = [
    {
      name: "Ревматоидный артрит",
      calculators: ["DAS28", "SDAI", "CDAI"],
      path: "/rheumatoid-arthritis",
      icon: "Activity"
    },
    {
      name: "Системная красная волчанка",
      calculators: ["SLEDAI", "BILAG"],
      path: "/lupus",
      icon: "ShieldAlert"
    },
    {
      name: "Системная склеродермия",
      calculators: ["mRSS", "Valentini"],
      path: "/scleroderma",
      icon: "ScanFace"
    },
    {
      name: "Болезнь Бехтерева",
      calculators: ["BASDAI", "ADAS"],
      path: "/ankylosing-spondylitis",
      icon: "Spine"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">MEDIКальк</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Онлайн калькуляторы для оценки активности ревматологических заболеваний
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg">
              <Link to="/about">Узнать больше</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/calculators">Перейти к калькуляторам</Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-muted/50 rounded-lg my-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Актуальность проблемы</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  Ревматологические заболевания требуют регулярной и точной оценки степени активности для 
                  корректировки терапии и мониторинга эффективности лечения.
                </p>
                <p className="text-lg">
                  Современные индексы активности болезни являются важным инструментом объективизации 
                  состояния пациента и принятия обоснованных клинических решений.
                </p>
                <p className="text-lg">
                  MEDIКальк предоставляет врачам-ревматологам и терапевтам удобный инструмент для быстрой 
                  и точной оценки активности заболевания по международным стандартам.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2942&auto=format&fit=crop" 
                  alt="Медицинские исследования" 
                  className="rounded-lg shadow-md max-w-full h-auto max-h-80 object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center mb-12">Калькуляторы по заболеваниям</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {diseases.map((disease, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-secondary p-3 flex items-center justify-center">
                      <Icon name={disease.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-2">{disease.name}</h3>
                      <p className="text-muted-foreground mb-4">
                        Индексы: {disease.calculators.join(", ")}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={disease.path}>Перейти к калькуляторам</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
