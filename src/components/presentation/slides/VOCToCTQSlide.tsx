import { Slide } from "../Slide";
import { Database, Filter, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Database,
    title: "جمع البيانات",
    description: "تجميع كل شكاوى وملاحظات العملاء من مصادر مختلفة"
  },
  {
    number: "2",
    icon: Filter,
    title: "التصنيف والتحليل",
    description: "تصنيف الشكاوى وتحليل الأنماط المتكررة"
  },
  {
    number: "3",
    icon: Target,
    title: "استخراج المتطلبات",
    description: "تحديد المتطلبات الحرجة من كلام العملاء"
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "القياس والتحسين",
    description: "وضع مؤشرات قابلة للقياس والتحسين"
  }
];

export const VOCToCTQSlide = () => {
  return (
    <Slide>
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-4">العلاقة بين VOC و CTQ</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto my-8 sm:my-12 md:my-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-blue-500/30 space-y-4 sm:space-y-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🎤</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-600">صوت العميل VOC</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              ما يقوله العميل بكلماته الخاصة: شكاوى، ملاحظات، طلبات، توقعات
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-primary/30 space-y-4 sm:space-y-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">العوامل الحرجة للجودة CTQ</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              ترجمة احتياجات العميل إلى متطلبات قابلة للقياس والتحسين
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10 md:mb-12 px-4">عملية التحويل من VOC إلى CTQ</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 h-full">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-medium">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/30 mt-8 sm:mt-12">
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-center mb-4 px-4">مثال توضيحي</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6">
              <p className="text-sm sm:text-base md:text-lg"><span className="font-bold text-blue-600">VOC:</span> "الصيانة بطيئة جداً"</p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6">
              <p className="text-sm sm:text-base md:text-lg"><span className="font-bold text-primary">CTQ:</span> "الاستجابة لطلبات الصيانة خلال 24 ساعة"</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
