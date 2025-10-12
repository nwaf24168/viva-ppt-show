import { Slide } from "../Slide";
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react";
import logo from "@/assets/logo.png";

const keyTakeaways = [
  {
    icon: AlertTriangle,
    title: "الصيانة - الأولوية القصوى",
    description: "62.25% من الشكاوى مرتبطة بالصيانة. إعادة هيكلة شاملة ضرورية فوراً"
  },
  {
    icon: Target,
    title: "8 عوامل حرجة للجودة",
    description: "تم تحديد العوامل الثمانية التي تؤثر مباشرة على رضا العملاء"
  },
  {
    icon: Users,
    title: "تحسين التواصل",
    description: "الفجوة الكبيرة في التواصل تتطلب حلولاً فورية ونظام استجابة سريع"
  },
  {
    icon: TrendingUp,
    title: "خطة عمل واضحة",
    description: "توصيات قابلة للتنفيذ مع مؤشرات أداء محددة لقياس التحسين"
  }
];

function AlertTriangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export const ConclusionSlide = () => {
  return (
    <Slide className="relative">
      <div className="absolute inset-0 opacity-5 bg-[url('@/assets/background.png')] bg-cover bg-center" />
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-primary">الخلاصة</span>
          </div>
          <h2 className="text-5xl font-light">النتائج الرئيسية والتوصيات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keyTakeaways.map((item, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-10 border-2 border-primary/30">
            <h3 className="text-3xl font-medium text-center mb-6">المسار إلى التحسين</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <span className="text-lg">التركيز الفوري على الصيانة</span>
              </div>
              <div className="text-3xl text-primary">→</div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <span className="text-lg">تحسين الأنظمة والعمليات</span>
              </div>
              <div className="text-3xl text-primary">→</div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <span className="text-lg">استعادة ثقة العملاء</span>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-6 pt-8">
            <img src={logo} alt="Alramz Logo" className="h-12 mx-auto" />
            <div className="space-y-2">
              <p className="text-2xl font-light">
                تحليل شامل بناءً على 409 شكوى عميل
              </p>
              <p className="text-lg text-muted-foreground">
                دراسة تحليلية متعمقة لصوت العميل والعوامل الحرجة للجودة
              </p>
            </div>
            
            <div className="pt-6">
              <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">8</div>
                  <div className="text-xs text-muted-foreground">عوامل CTQ</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">11</div>
                  <div className="text-xs text-muted-foreground">تصنيف رئيسي</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">409</div>
                  <div className="text-xs text-muted-foreground">شكوى</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
