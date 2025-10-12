import { Slide } from "../Slide";
import { FileText, TrendingUp, BarChart3, Search, MessageSquare, AlertTriangle, Target, CheckCircle } from "lucide-react";

const contents = [
  { number: "01", title: "مقدمة عن VOC و CTQ", subtitle: "التعريف والأهمية والعلاقة بينهما", icon: FileText },
  { number: "02", title: "نظرة عامة على البيانات", subtitle: "إحصائيات أساسية وتوزيع الشكاوى", icon: BarChart3 },
  { number: "03", title: "تحليل التصنيفات الرئيسية", subtitle: "توزيع الشكاوى حسب الفئات", icon: TrendingUp },
  { number: "04", title: "تحليل CTQ المفصل", subtitle: "العوامل الثمانية الحرجة للجودة", icon: Target },
  { number: "05", title: "الكلمات المفتاحية والأنماط", subtitle: "تحليل النصوص واستخراج الرؤى", icon: Search },
  { number: "06", title: "التحليل التفصيلي للمشاكل", subtitle: "الجودة، المبيعات، الصيانة، المرافق", icon: AlertTriangle },
  { number: "07", title: "نقاط الألم وأزمة الثقة", subtitle: "تحليل المشاعر وحدة الشكاوى", icon: MessageSquare },
  { number: "08", title: "التوصيات وخطة العمل", subtitle: "حلول استراتيجية ومؤشرات الأداء", icon: CheckCircle },
];

export const TableOfContentsSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-light">جدول المحتويات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {contents.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary">{item.number}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};
