
import { Layout } from "@ояния здоровья паци/components/Layout";ентом."
        />
      )}
import { Card, CardContent, Car
    </div>
  );

  constdDescription, CardHeader, CardTitle } from SDAICalculator = () => ( "@/components/ui/card";
import
    <div className="space-y-6 { Accordion, Accordion">
      <Card>
        <CarContent, AccordionItemdContent className="pt-6">
          , AccordionTrigger }<div className="grid grid-cols-1  from "@/components/ui/accordion";gap-4 sm:grid-cols-

const About = () =>2">
            <div className="space- {
  return (
    <Layout>y-2">
              <Label htmlFor
      <div className="container mx-auto px-="sdai-tenderJoints4 py-8">
        <div className="max-w-4">Число болезненных суставовxl mx-auto"> (0-28)</Label>
              
          <h1 className="text<Input
                id="sdai-t-3xl font-bold mbenderJoints"
                type="number-2">О проекте"
                value={sdaiData.tenderJoints}
                onChange={(e MEDIКаль) => setSdaiData({...sdaiк</h1>Data, tenderJoints: parseInt(
          <p className="text-me.target.value) || 0}uted-foreground mb-8)}
                min="0"
                max="28"
              />
            </div>
            
            <div className="space-y-2">
              <Label html">
            Информация о нашем проектеFor="sdai-swollenJo и используемых калькуляторахints">Число припухших суставов
          </p>
          
           (0-28)</Label>
              <Input
                id="sdai-swol<Card className="mb-8">
            <CardHeader>
              <CarlenJoints"
                type="numberdTitle>Наша миссия</Car"
                value={sdaiData.swollenJoints}
                onChange={(dTitle>
              <CardDescription>e) => setSdaiData({...sdaiData, swollenJoints:
                Помощь врачам в объективной оценке parseInt(e.target.value) || 0})}
                min="0" активности ревматолог
                max="28"
              />
            ических заболеваний
              </CardDescription></div>
            
            <div className
            </CardHeader>
            ="space-y-2">
              <CardContent>
              <Label htmlFor="sdai-patientGlobal">Общая оценка п<p className="mb-4">
                ациентом (0-10)</Label>MEDIКальк
              <div className="pt-6"> создан для врачей-рев
                <Slider
                  value={[sdaiData.patientGlobalматологов и терапевтов,]}
                  min={0}
                 чтобы облегчить   max={10}
                  step={0.1}
                  onValueChange
                оценку активности ревматологических заболева={(value) => setSdaiData({...ний с помощью современsdaiData, patientGlobal:ных 
                стандартизирован value[0]})}
                />
              ных индексов.
              </p></div>
              <p className="text
              <p className="mb-4">-sm text-center mt-2">{
                Наш проект предоставsdaiData.patientGlobal.ляет удобные и точtoFixed(1)}</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sdai-physicianGные онлайн-калlobal">Общая оценка врькуляторы для 
                основных ревматологических состояний, что помогает врачам в принятии 
                клачом (0-10)</Label>инических решений, м
              <div className="pt-6">ониторинге э
                <Slider
                  value={[ффективности лечения и прsdaiData.physicianGlobal]}огнозировании 
                теч
                  min={0}
                  ения заболевания.
              </pmax={10}
                  step={0>
              <p>.1}
                  onValueChange={(
                Мы стремимся предоставлять актvalue) => setSdaiData({...sуальную информацию,daiData, physicianGlobal: value основанную на последних 
                науч[0]})}
                />
              ных данных и клинических реком</div>
              <p className="text-ендациях ведущих профsm text-center mt-2">{sессиональных 
                сdaiData.physicianGlobal.toообществ.
              </p>Fixed(1)}</p>
            
            </CardContent>
          </Card></div>
            
            <div className="
          
          <hspace-y-2 2 className="textsm:col-span--2xl font-sem2">
              <Label htmlFor="sibold mb-4">Информация о калькуdai-crp">СРБляторах</h2>
           (мг/дл)</Label>
          <Accordion type="single" collapsible className="mb-8">
            <Accor
              <Input
                id="sdai-crp"
                type="number"dionItem value="ra
                value={sdaiData.crp}">
              <AccordionTrigger
                onChange={(e) => setSdai>РевматоидData({...sdaiData, crp:ный артрит</AccordionTrig parseFloat(e.target.value) || ger>
              <AccordionContent>0})}
                
                <h3 className="font-semibold mbmin="0"
                step-2">DAS28 ="0.1"
              />
            (Disease Activity Score)</h3>
                </div>
          </div>
          <p className="mb-4">
          <Button 
            className="w-full mt-6" 
            onClick={calculateSDAI}
          >
            Рассчитать SDAI
          </Button>
        
                  Индекс активности заболевания, основанный на оценке 28 суставов.</CardContent>
      </Card>
       
                  Учитывает число болезненных и
      {sdaiData.calculated && ( припухших суставов, С
        <ResultDisplay
          title="ОЭ или СРБ, SDAI"
          score={sdaiData
                  а также общую оцен.score}
          interpretation={getSDAIку состояния здInterpretation()}
          details="оровья пациSDAI (Simplified Disease Activity Index) -ентом.
                </p>
                
                <h3 className="font-sem упрощенный индекс активности ревматоидного артрита, учibold mb-2">SDAI (итывающий число болезненных иSimplified Disease Activity Index)</h3>
                <p className=" припухших суставов, общую оmb-4">
                  Упрценку пациентом и врачомощенный индекс активности забол, а также уровень СРБевания. Включ."
        />
      )}
    ает число болезненных 
                  и прип</div>
  );

  const Cухших суставовDAICalculator = () => (
    , общую оценку пациентом и врачом, а<div className="space-y-6">
      <Card>
        <CardContent также уровень СРБ. className="pt-6">
          <div
                </p>
                
                <h className="grid grid-cols-1 gap3 className="font-semibold mb-4 sm:grid-cols-2-2">CDAI (Clinical Disease Activity Index)</h3>">
            <div className="space-y
                <p>
                  Кл-2">
              <Label htmlFor="инический индекс активности заболевcdai-tenderJoints">Число болезненных суставов (0ания, не требующий лабора-28)</Label>
              <Inputторных 
                  показателей.
                id="cdai-tenderJo Включает число болезненных и припints"
                type="number"
                ухших суставовvalue={cdaiData.tenderJo, 
                  общую оценку пациints}
                onChange={(e) => setCентом и врачом.
                daiData({...cdaiData, t</p>
              </AccordionContent>enderJoints: parseInt(e.target
            </AccordionItem>
            .value) || 0})}
                
            <Accormin="0"
                max="28"dionItem value="sle">
              <Acc
              />
            </div>
            ordionTrigger>Системная крас
            <div className="space-y-ная волчанка</AccordionT2">
              <Label htmlFor="crigger>
              <AccordionContentdai-swollenJoints">>
                <h3 className="fontЧисло припухших суставов (0--semibold mb-2">SLED28)</Label>
              <Input
                AI (SLE Disease Activity Index)id="cdai-swollenJo</h3>
                <p className="mbints"
                type="number"
                -4">
                  Индексvalue={cdaiData.swollenJ активности системной красной волчанкиoints}
                onChange={(e) =>. Оценивает различ setCdaiData({...cdaiData,ные клинические 
                  прояв swollenJoints: parseInt(eления и лабораторные.target.value) || 0})} показатели, характерные для С
                min="0"
                max="КВ.
                </p>28"
              />
            </div>
                
                <h3 className="font
            
            <div className="space--semibold mb-2">BIy-2">
              <Label htmlForLAG (British Isles Lupus Assessment="cdai-patientGlobal"> Group)</h3>
                <p>Общая оценка пациентом
                  Ком (0-10)</Label>
              плексная оценка активности<div className="pt-6">
                 СКВ по органам и системам.<Slider
                  value={[cdai Позволяет Data.patientGlobal]}
                  min={0}
                  max={
                  оценить не только общую активность,10}
                  step={0.1 но и вовлечение конкретных органов.
                </p>
              </Acc}
                  onValueChange={(value) => setCdaiData({...cdaiDataordionContent>
            </Accordion, patientGlobal: value[0Item>
            ]})}
                />
              </div>
            <Accordion
              <p className="text-sm textItem value="ssc">
              <Acc-center mt-2">{cdaiDataordionTrigger.patientGlobal.toFixed(>Системная склеродермия</Accordion1)}</p>
            </div>Trigger>
            
            <div className="space-
              <AccordionContent>
                <h3 className="y-2">
              <Label htmlForfont-semibold mb-2">m="cdai-physicianGlobal">RSS (modified Rodnan SkinОбщая оценка врачом ( Score)</h3>0-10)</Label>
              <div
                <p className="mb-4"> className="pt-6">
                <Slider
                  value={[cdaiData.physicianGlobal]}
                  
                  Модmin={0}
                  max={10ифицированный кожный счет Роднана для оценки тяжести кожных}
                  step={0.1} проявлений 
                  систем
                  onValueChange={(value) => setCdaiData({...cdaiData,ной склеродермии. physicianGlobal Оценивает тол: value[0]})}
                />щину кожи в 17 анатомических областях
              </div>
              <p className=".
                </p>
                
                text-sm text-center mt-2"<h3 className>{cdaiData.physicianGlobal.toFixed(1)}</p>="font-semibold mb-2">Индекс
            </div>
          </div>
           Valentini</h3>
          <Button 
            className="w
                <p>
                  Европейский индекс-full mt-6" 
            onClick активности системной скле={calculateCDAI}
          >родермии, учитывающий 
            Рассчитать CDAI
                  различные клинические про
          </Button>
        </CardContent>
      </Card>
      
      явления, лабораторные показ{cdaiData.calculated && (
        атели и изменения 
                <ResultDisplay
          title="CDAI  в состоянии пациента.
                "
          score={cdaiData.score</p>
              }
          interpretation={getCDAIInterp</AccordionContent>
            </Accretation()}
          details="CDAIordionItem>
            
            <Acc (Clinical Disease Activity Index) - клиническийordionItem value=" индекс активности ревматоидas">
              <Accного артрита, неordionTrigger>Бол требующий лабораторных исследезнь Бехтерева (ований. УчитываетАнкилозирующий спондилит число болезненных и припухших су)</AccordionTrigger>
              ставов, общую оценку паци<AccordionContent>
                <hентом и врачом."
        />3 className="font-semibold mb
      )}
    </div>
  -2">BA);

  return (
    <Layout>SDAI (Bath Ankylosing
      <CalculatorLayout Spondylitis Disease Activity Index)</h3
        title="Ревматоидный>
                <p className="mb-4 артрит"
        description">
                  Индекс активности="Калькуляторы для о анкилозирующего спондилитаценки активности ревматоидного, основанный на о артрита по индексам DAS28ценке 
                  п, SDAI и CDAI"ациентом таких симптомов
        calculators={[
          { i, как утомляемость, боd: "das28", name:ль в позвоночнике "DAS28-СОЭ и суставах, 
                  ут", content: <DAS28Calculator /> },
          { id: "sdai", name: "SDAI", content: <SDAICalculator /> },
          { id: "cdai", name: "ренняя скованность.
                </p>
                
                <h3 className="font-semibold mb-2">ASDAS (Ankylosing Spondylitis Disease Activity Score)</h3>CDAI", content: <CDAICalcul
                <p>
                  Комбator /> }
        ]}
      />инированный индекс,
    </Layout>
  );
}; включающий как субъективную

export default RheumatoidArth оценку пациентом 
                ritis;
