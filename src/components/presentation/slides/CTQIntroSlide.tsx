import { Slide } from "../Slide";
import { Target, CheckCircle, Users, TrendingUp } from "lucide-react";

const characteristics = [
  {
    icon: CheckCircle,
    title: "قابلة للقياس",
    description: "يحدد CTQ معايير قابلة للقياس محددة، مثل أرقام أو نسب مئوية"
  },
  {
    icon: Target,
    title: "محددة وواضحة",
    description: "الجوانب التي لا تحتمل التأويل أو الغموض"
  },
  {
    icon: Users,
    title: "مرتبطة بالعميل",
    description: "تعكس احتياجات العملاء الفعلية"
  },
  {
    icon: TrendingUp,
    title: "تأثير على رضا العملاء",
    description: "تساعد CTQ المؤسسات على التركيز على ما يهم العملاء فعلياً"
  }
];

export const CTQIntroSlide = () => {
  return (
    <Slide>
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-sm sm:text-base md:text-lg font-medium text-primary">Critical to Quality</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-4">العوامل الحرجة للجودة</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border-2 border-primary/20">
            <h3 className="text-3xl font-light text-center mb-8">ما هي CTQ للجودة؟</h3>
            
            <p className="text-2xl leading-relaxed text-center mb-12">
              العوامل الحرجة للجودة (Critical to Quality - CTQ) هي الخصائص والمتطلبات القابلة للقياس والتي تؤثر بشكل مباشر على رضا العملاء
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 space-y-3">
                <div className="text-primary text-4xl font-bold">❌</div>
                <p className="text-lg">بدلاً من: "العميل يريد خدمة جيدة"</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 space-y-3">
                <div className="text-green-500 text-4xl font-bold">✓</div>
                <p className="text-lg">نقول: "الرد على الطلبات خلال 24 ساعة" أو "حل 95% من المشاكل من المرة الأولى"</p>
              </div>
            </div>
            
            <p className="text-lg text-center text-muted-foreground">
              تمثل CTQ ترجمة احتياجات العملاء الواسعة إلى متطلبات محددة وقابلة للقياس يمكن للمؤسسة تتبعها وتحسينها
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-light text-center mb-8">خصائص المفهوم الأساسي الفعالة</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <char.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-medium">{char.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};
