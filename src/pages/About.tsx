
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">О проекте MEDIКальк</h1>
          <p className="text-muted-foreground mb-8">
            Информация о нашем проекте и используемых калькуляторах
          </p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Наша миссия</CardTitle>
              <CardDescription>
                Помощь врачам в объективной оценке активности ревматологических заболеваний
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                MEDIКальк создан для врачей-ревматологов и терапевтов, 
                чтобы облегчить оценку активности ревматологических заболеваний с помощью современных 
                стандартизированных индексов.
              </p>
              <p className="mb-4">
                Наш проект предоставляет удобные и точные онлайн-калькуляторы для 
                основных ревматологических состояний, что помогает врачам в принятии 
                клинических решений, мониторинге эффективности лечения и прогнозировании 
                течения заболевания.
              </p>
              <p>
                Мы стремимся предоставлять актуальную информацию, основанную на последних 
                научных данных и клинических рекомендациях ведущих профессиональных 
                сообществ.
              </p>
            </CardContent>
          </Card>
          
          <h2 className="text-2xl font-semibold mb-4">Информация о калькуляторах</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="ra">
              <AccordionTrigger>Ревматоидный артрит</AccordionTrigger>
              <AccordionContent>
                <h3 className="font-semibold mb-2">DAS28 (Disease Activity Score)</h3>
                <p className="mb-4">
                  Индекс активности заболевания, основанный на оценке 28 суставов. 
                  Учитывает число болезненных и припухших суставов, СОЭ или СРБ, 
                  а также общую оценку состояния здоровья пациентом.
                </p>
                
                <h3 className="font-semibold mb-2">SDAI (Simplified Disease Activity Index)</h3>
                <p className="mb-4">
                  Упрощенный индекс активности заболевания. Включает число болезненных 
                  и припухших суставов, общую оценку пациентом и врачом, а также уровень СРБ.
                </p>
                
                <h3 className="font-semibold mb-2">CDAI (Clinical Disease Activity Index)</h3>
                <p>
                  Клинический индекс активности заболевания, не требующий лабораторных 
                  показателей. Включает число болезненных и припухших суставов, 
                  общую оценку пациентом и врачом.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sle">
              <AccordionTrigger>Системная красная волчанка</AccordionTrigger>
              <AccordionContent>
                <h3 className="font-semibold mb-2">SLEDAI (SLE Disease Activity Index)</h3>
                <p className="mb-4">
                  Индекс активности системной красной волчанки. Оценивает различные клинические 
                  проявления и лабораторные показатели, характерные для СКВ.
                </p>
                
                <h3 className="font-semibold mb-2">BILAG (British Isles Lupus Assessment Group)</h3>
                <p>
                  Комплексная оценка активности СКВ по органам и системам. Позволяет 
                  оценить не только общую активность, но и вовлечение конкретных органов.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="ssc">
              <AccordionTrigger>Системная склеродермия</AccordionTrigger>
              <AccordionContent>
                <h3 className="font-semibold mb-2">mRSS (modified Rodnan Skin Score)</h3>
                <p className="mb-4">
                  Модифицированный кожный счет Роднана для оценки тяжести кожных проявлений 
                  системной склеродермии. Оценивает толщину кожи в 17 анатомических областях.
                </p>
                
                <h3 className="font-semibold mb-2">Индекс Valentini</h3>
                <p>
                  Европейский индекс активности системной склеродермии, учитывающий 
                  различные клинические проявления, лабораторные показатели и изменения 
                  в состоянии пациента.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="as">
              <AccordionTrigger>Болезнь Бехтерева (Анкилозирующий спондилит)</AccordionTrigger>
              <AccordionContent>
                <h3 className="font-semibold mb-2">BASDAI (Bath Ankylosing Spondylitis Disease Activity Index)</h3>
                <p className="mb-4">
                  Индекс активности анкилозирующего спондилита, основанный на оценке 
                  пациентом таких симптомов, как утомляемость, боль в позвоночнике и суставах, 
                  утренняя скованность.
                </p>
                
                <h3 className="font-semibold mb-2">ASDAS (Ankylosing Spondylitis Disease Activity Score)</h3>
                <p>
                  Комбинированный индекс, включающий как субъективную оценку пациентом 
                  своих симптомов, так и объективный показатель воспаления (СРБ или СОЭ).
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div id="disclaimer" className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Правовая информация</h2>
            <p className="mb-4">
              Калькуляторы на сайте MEDIКальк предназначены только для использования 
              квалифицированными медицинскими специалистами. Результаты расчетов не должны 
              рассматриваться как единственный критерий для принятия клинических решений.
            </p>
            <p className="mb-4">
              Всегда следует учитывать клиническую картину и другие лабораторные и 
              инструментальные данные при оценке состояния пациента и выборе тактики лечения.
            </p>
            <p>
              Данные калькуляторы не заменяют профессиональную медицинскую консультацию, 
              диагностику или лечение. Всегда обращайтесь к своему врачу с любыми вопросами, 
              которые могут возникнуть относительно состояния здоровья пациента.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
