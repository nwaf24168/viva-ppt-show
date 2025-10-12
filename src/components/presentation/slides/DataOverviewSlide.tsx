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
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-4">نظرة عامة على البيانات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/80 flex items-center justify-center mx-auto">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-foreground" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{stat.number}</div>
                <div className="text-base sm:text-lg md:text-xl font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto mt-8 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8">
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              مصدر البيانات
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              ملف VOC_Dashboard.xlsx يحتوي على شكاوى العملاء المجمعة من قنوات متعددة ومصنفة حسب نوع المشكلة
            </p>
          </div>
          
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              منهجية التحليل
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
              تحليل نصي شامل باستخدام تقنيات معالجة اللغة الطبيعية لاستخراج الكلمات المفتاحية والأنماط المتكررة
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-medium mb-2">التصنيفات الرئيسية</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">تم تصنيف الشكاوى إلى 11 فئة رئيسية تشمل: الجودة، المبيعات، الصيانة، مواعيد الصيانة، مشاكل المرافق، والمستندات</p>
              </div>
              
              <div className="bg-accent/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-medium mb-2">العوامل الحرجة</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">تم تحديد 8 عوامل حرجة للجودة بناءً على تكرار الكلمات المفتاحية والموضوعات المشتركة في الشكاوى</p>
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
