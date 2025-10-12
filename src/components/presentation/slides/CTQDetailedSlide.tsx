import { Slide } from "../Slide";
import { Wrench, Clock, MessageCircle, Target, Shield, Users, TrendingUp, CheckCircle } from "lucide-react";

const ctqFactors = [
  {
    number: "1",
    icon: Wrench,
    title: "جودة الإصلاح",
    description: "معالجة المشاكل من الجذور في المرة الأولى",
    impact: "261 إشارة",
    severity: "critical"
  },
  {
    number: "2",
    icon: Clock,
    title: "سرعة الاستجابة",
    description: "الرد السريع على طلبات الصيانة",
    impact: "152 إشارة",
    severity: "critical"
  },
  {
    number: "3",
    icon: Clock,
    title: "المواعيد والوقت",
    description: "الالتزام بالمواعيد المحددة",
    impact: "109 إشارة",
    severity: "high"
  },
  {
    number: "4",
    icon: Users,
    title: "الوعود والواقع",
    description: "تطابق وعود المبيعات مع الواقع",
    impact: "98 إشارة",
    severity: "high"
  },
  {
    number: "5",
    icon: Shield,
    title: "الضمانات والمستندات",
    description: "وضوح الضمانات وتوفر المستندات",
    impact: "92 إشارة",
    severity: "medium"
  },
  {
    number: "6",
    icon: MessageCircle,
    title: "جودة التواصل",
    description: "سهولة الوصول وسرعة الرد",
    impact: "88 إشارة",
    severity: "medium"
  },
  {
    number: "7",
    icon: Target,
    title: "جودة التشطيبات",
    description: "مستوى التشطيب والمواد المستخدمة",
    impact: "76 إشارة",
    severity: "medium"
  },
  {
    number: "8",
    icon: TrendingUp,
    title: "المرافق المشتركة",
    description: "صيانة ونظافة المرافق العامة",
    impact: "63 إشارة",
    severity: "low"
  }
];

export const CTQDetailedSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
            <Target className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-primary">CTQ Analysis</span>
          </div>
          <h2 className="text-5xl font-light">العوامل الثمانية الحرجة للجودة</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground">تم تحديدها بناءً على تحليل شامل لـ 409 شكوى</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ctqFactors.map((factor, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 space-y-4 ${
                factor.severity === 'critical'
                  ? 'border-red-500/50 bg-red-500/5'
                  : factor.severity === 'high'
                  ? 'border-orange-500/50 bg-orange-500/5'
                  : factor.severity === 'medium'
                  ? 'border-yellow-500/50 bg-yellow-500/5'
                  : 'border-blue-500/50 bg-blue-500/5'
              }`}
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg ${
                factor.severity === 'critical'
                  ? 'bg-red-600'
                  : factor.severity === 'high'
                  ? 'bg-orange-600'
                  : factor.severity === 'medium'
                  ? 'bg-yellow-600'
                  : 'bg-blue-600'
              }`}>
                {factor.number}
              </div>
              
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                factor.severity === 'critical'
                  ? 'bg-red-500/20'
                  : factor.severity === 'high'
                  ? 'bg-orange-500/20'
                  : factor.severity === 'medium'
                  ? 'bg-yellow-500/20'
                  : 'bg-blue-500/20'
              }`}>
                <factor.icon className={`w-7 h-7 ${
                  factor.severity === 'critical'
                    ? 'text-red-600'
                    : factor.severity === 'high'
                    ? 'text-orange-600'
                    : factor.severity === 'medium'
                    ? 'text-yellow-600'
                    : 'text-blue-600'
                }`} />
              </div>
              
              <h3 className="text-xl font-bold">{factor.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
              
              <div className={`pt-4 border-t flex items-center justify-between ${
                factor.severity === 'critical'
                  ? 'border-red-500/30'
                  : factor.severity === 'high'
                  ? 'border-orange-500/30'
                  : factor.severity === 'medium'
                  ? 'border-yellow-500/30'
                  : 'border-blue-500/30'
              }`}>
                <span className="text-xs text-muted-foreground">التأثير</span>
                <span className={`text-lg font-bold ${
                  factor.severity === 'critical'
                    ? 'text-red-600'
                    : factor.severity === 'high'
                    ? 'text-orange-600'
                    : factor.severity === 'medium'
                    ? 'text-yellow-600'
                    : 'text-blue-600'
                }`}>{factor.impact}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-red-500/10 rounded-xl p-4 border-2 border-red-500/30 text-center">
            <div className="text-3xl font-bold text-red-600">حرجة جداً</div>
            <div className="text-sm mt-2">عاملان</div>
          </div>
          
          <div className="bg-orange-500/10 rounded-xl p-4 border-2 border-orange-500/30 text-center">
            <div className="text-3xl font-bold text-orange-600">عالية</div>
            <div className="text-sm mt-2">عاملان</div>
          </div>
          
          <div className="bg-yellow-500/10 rounded-xl p-4 border-2 border-yellow-500/30 text-center">
            <div className="text-3xl font-bold text-yellow-600">متوسطة</div>
            <div className="text-sm mt-2">ثلاثة عوامل</div>
          </div>
          
          <div className="bg-blue-500/10 rounded-xl p-4 border-2 border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-blue-600">منخفضة</div>
            <div className="text-sm mt-2">عامل واحد</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
