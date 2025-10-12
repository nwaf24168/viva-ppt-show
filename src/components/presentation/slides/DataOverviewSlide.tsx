import { Slide } from "../Slide";
import { FileText, Tags, Target } from "lucide-react";

const stats = [
  {
    icon: FileText,
    number: "409",
    label: "إجمالي عدد الشكاوى",
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
  },
  {
    icon: Tags,
    number: "11",
    label: "تصنيف رئيسي",
    color: "from-primary/20 to-accent/20 border-primary/30"
  },
  {
    icon: Target,
    number: "8",
    label: "عامل حرج للجودة (CTQ)",
    color: "from-green-500/20 to-green-600/20 border-green-500/30"
  }
];

export const DataOverviewSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-light">نظرة عامة على البيانات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} rounded-3xl p-10 border-2 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mx-auto">
                  <stat.icon className="w-10 h-10 text-foreground" />
                </div>
                <div className="text-7xl font-bold">{stat.number}</div>
                <div className="text-xl font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto mt-16 space-y-8">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              مصدر البيانات
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ملف VOC_Dashboard.xlsx يحتوي على شكاوى العملاء المجمعة من قنوات متعددة ومصنفة حسب نوع المشكلة
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart className="w-5 h-5 text-primary" />
              </div>
              منهجية التحليل
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              تحليل نصي شامل باستخدام تقنيات معالجة اللغة الطبيعية لاستخراج الكلمات المفتاحية والأنماط المتكررة
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="font-medium mb-2">التصنيفات الرئيسية</h4>
                <p className="text-sm text-muted-foreground">تم تصنيف الشكاوى إلى 11 فئة رئيسية تشمل: الجودة، المبيعات، الصيانة، مواعيد الصيانة، مشاكل المرافق، والمستندات</p>
              </div>
              
              <div className="bg-accent/20 rounded-xl p-4">
                <h4 className="font-medium mb-2">العوامل الحرجة</h4>
                <p className="text-sm text-muted-foreground">تم تحديد 8 عوامل حرجة للجودة بناءً على تكرار الكلمات المفتاحية والموضوعات المشتركة في الشكاوى</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

function Database(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function BarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
