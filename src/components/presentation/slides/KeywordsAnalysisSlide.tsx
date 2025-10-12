import { Slide } from "../Slide";
import { Card } from "@/components/ui/card";

const topKeywords = [
  { word: "صيانة", count: 212, category: "maintenance" },
  { word: "مشكلة", count: 147, category: "maintenance" },
  { word: "تأخير", count: 76, category: "time" },
  { word: "تواصل", count: 61, category: "communication" },
  { word: "موعد", count: 54, category: "time" },
  { word: "انتظار", count: 42, category: "time" },
  { word: "اتصال", count: 39, category: "communication" },
  { word: "رد", count: 68, category: "communication" },
];

const technicalIssues = [
  { issue: "التكييف / المكيف", count: 124 },
  { issue: "العزل / التسريب", count: 89 },
  { issue: "النوافذ / الأبواب", count: 67 },
  { issue: "الصرف / السباكة", count: 54 },
  { issue: "التشطيبات / الدهانات", count: 48 },
  { issue: "الكهرباء", count: 42 },
  { issue: "السخان", count: 36 },
  { issue: "السيراميك / البلاط", count: 31 },
  { issue: "الجبس", count: 28 },
  { issue: "المطبخ", count: 25 },
];

const negativeWords = [
  { word: "الصيانة", count: 187 },
  { word: "المشاكل / المشكلة", count: 156 },
  { word: "التأخر / التأخير", count: 89 },
  { word: "لا يرد / عدم الرد", count: 76 },
  { word: "سيئة / سيء", count: 68 },
  { word: "المواعيد / الموعد", count: 64 },
  { word: "الانتظار", count: 52 },
  { word: "ضعيف / ضعف", count: 47 },
  { word: "تسرب / التسريب", count: 43 },
  { word: "عدم الالتزام", count: 38 },
];

export const KeywordsAnalysisSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-light">تحليل الكلمات المفتاحية</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Top Keywords */}
          <Card className="p-6 space-y-6">
            <h3 className="text-2xl font-medium text-center">الكلمات الأكثر تكراراً</h3>
            <div className="space-y-3">
              {topKeywords.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">{item.word}</span>
                  <span className="text-2xl font-bold text-primary">{item.count}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-border space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm">بالصيانة المرتبطة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-sm">بالوقت المرتبطة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-sm">بالتواصل المرتبطة</span>
              </div>
            </div>
          </Card>
          
          {/* Technical Problems */}
          <Card className="p-6 space-y-6">
            <h3 className="text-2xl font-medium text-center">أكثر 10 مشاكل فنية تكراراً</h3>
            <div className="space-y-2">
              {technicalIssues.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm">{item.issue}</span>
                    <span className="font-bold text-primary">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Negative Words */}
          <Card className="p-6 space-y-6">
            <h3 className="text-2xl font-medium text-center">أكثر 10 كلمات سلبية تكراراً</h3>
            <div className="space-y-2">
              {negativeWords.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-600 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm">{item.word}</span>
                    <span className="font-bold text-red-600">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border-2 border-red-500/30 space-y-3">
              <h4 className="text-xl font-medium text-red-600">الكلمات المرتبطة بالصيانة</h4>
              <p className="text-sm leading-relaxed">
                كلمات "صيانة" (212 مرة)، "مشكلة" (147 مرة) تهيمن على الشكاوى، مما يؤكد أن الصيانة هي القضية المركزية التي تحتاج إلى معالجة فورية وشاملة
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border-2 border-orange-500/30 space-y-3">
              <h4 className="text-xl font-medium text-orange-600">الكلمات المرتبطة بالوقت</h4>
              <p className="text-sm leading-relaxed">
                تكرار كلمات "تأخير" (76 مرة)، "موعد" (54 مرة)، "انتظار" (42 مرة) يعكس استياء العملاء الشديد من عدم الالتزام بالمواعيد وطول فترات الانتظار
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-xl p-6 border-2 border-yellow-500/30 space-y-3">
              <h4 className="text-xl font-medium text-yellow-600">الكلمات المرتبطة بالتواصل</h4>
              <p className="text-sm leading-relaxed">
                ظهور كلمات "تواصل" (61 مرة)، "رد" (68 مرة)، "اتصال" (39 مرة) بكثرة يشير إلى فجوة كبيرة في جودة التواصل وسرعة الاستجابة للعملاء
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
