import { Slide } from "../Slide";
import { Target, Users, TrendingUp, CheckCircle, Calendar, FileText } from "lucide-react";

const strategicRecommendations = [
  {
    icon: Target,
    priority: "عاجلة",
    title: "إعادة هيكلة نظام الصيانة",
    actions: [
      "زيادة عدد فنيي الصيانة وتوزيعهم جغرافياً",
      "تطبيق نظام تذاكر إلكتروني لتتبع الطلبات",
      "تحديد معايير زمنية صارمة للاستجابة (24-48 ساعة)",
      "إنشاء قسم رقابة جودة لمتابعة الإصلاحات"
    ],
    kpi: "تقليل زمن الاستجابة بنسبة 70% خلال 6 أشهر"
  },
  {
    icon: Calendar,
    priority: "عاجلة",
    title: "تحسين إدارة المواعيد",
    actions: [
      "تطبيق نظام حجز مواعيد ذكي مع خيارات متعددة",
      "إرسال إشعارات تلقائية للعملاء (تأكيد، تذكير، تحديثات)",
      "فرض معايير صارمة للالتزام بالمواعيد",
      "تعويض العملاء عن التأخير"
    ],
    kpi: "الوصول لنسبة التزام 95% بالمواعيد المحددة"
  },
  {
    icon: Users,
    priority: "عالية",
    title: "تطوير التواصل مع العملاء",
    actions: [
      "إنشاء مركز اتصال متخصص يعمل 24/7",
      "تطوير تطبيق جوال لإدارة الطلبات والشكاوى",
      "تدريب فرق خدمة العملاء على التواصل الفعال",
      "إنشاء قاعدة معرفية للأسئلة الشائعة"
    ],
    kpi: "الرد على 90% من الاستفسارات خلال ساعة واحدة"
  },
  {
    icon: CheckCircle,
    priority: "عالية",
    title: "رفع معايير الجودة",
    actions: [
      "تطبيق معايير جودة صارمة للمواد والتشطيبات",
      "نظام فحص متعدد المراحل (قبل، أثناء، بعد)",
      "تدريب العمال والمقاولين على معايير الجودة",
      "معاينة نهائية شاملة مع العميل قبل التسليم"
    ],
    kpi: "تقليل شكاوى الجودة بنسبة 60% خلال سنة"
  },
  {
    icon: FileText,
    priority: "متوسطة",
    title: "تحسين الشفافية والمستندات",
    actions: [
      "توضيح شروط الضمان بشكل مفصل وبسيط",
      "نظام إلكتروني لتسليم وتتبع المستندات",
      "تسليم جميع المستندات عند التسليم (قائمة تحقق)",
      "تبسيط إجراءات المطالبة بالضمان"
    ],
    kpi: "تسليم 100% من المستندات في موعد التسليم"
  },
  {
    icon: TrendingUp,
    priority: "متوسطة",
    title: "تطابق التوقعات مع الواقع",
    actions: [
      "مراجعة جميع المواد التسويقية لضمان دقتها",
      "تدريب فريق المبيعات على الشفافية والواقعية",
      "متابعة دورية للعملاء بعد البيع",
      "نظام تقييم لأداء فريق المبيعات"
    ],
    kpi: "تقليل فجوة التوقعات بنسبة 50% خلال سنة"
  }
];

export const RecommendationsSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-500/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <span className="text-sm sm:text-base md:text-lg font-medium text-green-600">Strategic Action Plan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-4">التوصيات وخطة العمل</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {strategicRecommendations.map((rec, index) => (
            <div
              key={index}
              className={`bg-card border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 space-y-6 ${
                rec.priority === 'عاجلة'
                  ? 'border-red-500/50 bg-red-500/5'
                  : rec.priority === 'عالية'
                  ? 'border-orange-500/50 bg-orange-500/5'
                  : 'border-yellow-500/50 bg-yellow-500/5'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    rec.priority === 'عاجلة'
                      ? 'bg-red-500/20'
                      : rec.priority === 'عالية'
                      ? 'bg-orange-500/20'
                      : 'bg-yellow-500/20'
                  }`}>
                    <rec.icon className={`w-7 h-7 ${
                      rec.priority === 'عاجلة'
                        ? 'text-red-600'
                        : rec.priority === 'عالية'
                        ? 'text-orange-600'
                        : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase mb-1 ${
                      rec.priority === 'عاجلة'
                        ? 'text-red-600'
                        : rec.priority === 'عالية'
                        ? 'text-orange-600'
                        : 'text-yellow-600'
                    }`}>
                      {rec.priority}
                    </div>
                    <h3 className="text-2xl font-bold">{rec.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">الإجراءات المطلوبة:</h4>
                <ul className="space-y-2">
                  {rec.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`pt-4 border-t ${
                rec.priority === 'عاجلة'
                  ? 'border-red-500/30'
                  : rec.priority === 'عالية'
                  ? 'border-orange-500/30'
                  : 'border-yellow-500/30'
              }`}>
                <div className="text-xs text-muted-foreground mb-1">مؤشر الأداء الرئيسي (KPI):</div>
                <div className={`font-bold ${
                  rec.priority === 'عاجلة'
                    ? 'text-red-600'
                    : rec.priority === 'عالية'
                    ? 'text-orange-600'
                    : 'text-yellow-600'
                }`}>{rec.kpi}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-10 border-2 border-green-500/30">
            <h3 className="text-3xl font-medium text-center mb-6">الخطوات التالية</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-5xl font-bold text-green-600">30</div>
                <div className="text-lg">يوماً لتطبيق الحلول العاجلة</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-5xl font-bold text-blue-600">90</div>
                <div className="text-lg">يوماً لقياس التحسينات الأولية</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-5xl font-bold text-purple-600">180</div>
                <div className="text-lg">يوماً لتحقيق التحول الكامل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
