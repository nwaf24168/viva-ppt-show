import { Slide } from "../Slide";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "تحسين رضا العملاء",
    description: "فهم احتياجات العملاء واكتشاف فرص التحسين والابتكار. يكشف تحليل صوت العميل عن نقاط الضعف الخفية والفرص غير المستغلة"
  },
  {
    icon: Target,
    title: "اتخاذ قرارات استراتيجية مبنية على البيانات",
    description: "يوفر تحليل VOC بيانات موضوعية وقابلة للقياس تساعد القادة على اتخاذ قرارات دقيقة أكثر من الاعتماد على الافتراضات"
  },
  {
    icon: DollarSign,
    title: "الحد من فقدان العملاء وتكاليف الإصلاح",
    description: "معالجة المشاكل في مراحلها المبكرة قبل أن تتفاقم يوفر على المؤسسات تكاليف كبيرة. العملاء غير الراضين يكلفون الشركة أكثر بكثير"
  },
  {
    icon: TrendingUp,
    title: "التطوير والنمو المستدام",
    description: "عندما تستمع المؤسسات لصوت عملائها وتتخذ إجراءات بناءً على ملاحظاتهم، يصبح العملاء الراضون أكثر ولاءً ويميلون إلى التوصية بالشركة"
  }
];

export const VOCImportanceSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-light">أهمية تحليل صوت العميل</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
              
              <div className="relative space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-medium">{benefit.title}</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <p className="text-2xl text-center leading-relaxed font-light">
            <span className="font-medium text-primary">الخلاصة:</span> تحليل صوت العميل ليس مجرد أداة لجمع الملاحظات، بل هو نهج استراتيجي شامل يضع العميل في قلب عملية صنع القرار، مما يؤدي إلى تحسينات مستدامة في الجودة والأداء والربحية على المدى الطويل
          </p>
        </div>
      </div>
    </Slide>
  );
};
