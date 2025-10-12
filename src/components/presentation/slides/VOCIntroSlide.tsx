import { Slide } from "../Slide";
import { Users, Target, TrendingUp, MessageCircle, Database } from "lucide-react";

const components = [
  {
    icon: Database,
    title: "جمع البيانات",
    description: "استخدام قنوات متعددة لجمع آراء العمالء مثل وسائل التواصل الاجتماعي، مقابلات، واستبيانات"
  },
  {
    icon: TrendingUp,
    title: "ترتيب الأولويات",
    description: "استخدام أدوات تحليلية لفهم أنماط واتجاهات ملاحظات العمالء"
  },
  {
    icon: Target,
    title: "تحديد القضايا",
    description: "تحديد القضايا وتأثيرها على رضا العمالء"
  },
  {
    icon: MessageCircle,
    title: "تطوير الإجراءات",
    description: "عمل خطط لمعالجة نقاط الضعف في تجربة العميل"
  },
  {
    icon: Users,
    title: "المراقبة والمتابعة",
    description: "قياس التحسينات وتأثيرها على رضا العمالء بشكل مستمر"
  }
];

export const VOCIntroSlide = () => {
  return (
    <Slide>
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-sm sm:text-base md:text-lg font-medium text-primary">Voice of the Customer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light px-4">ما هو صوت العميل</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-center px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90">
            صوت العميل (Voice of the Customer - VOC) هو عملية منهجية لجمع وفهم وتحليل احتياجات العملاء وتوقعاتهم وتفضيلاتهم
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-right space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-medium text-primary">الهدف الرئيسي</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                تحسين المنتجات والخدمات وتعزيز رضا العملاء وتخفيف شكاواهم
              </p>
            </div>
            
            <div className="bg-accent/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-right space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-medium text-primary">المنهجية</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                تحويل آراء العمالء وملاحظاتهم إلى معلومات مفيدة وقابلة للتنفيذ
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-6 sm:mb-8 px-4">المكونات الأساسية لتحليل VOC</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3 sm:space-y-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <component.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-center">{component.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};
