import { Slide } from "../Slide";
import { Card } from "@/components/ui/card";

const complaintsData = [
  { category: "مشاكل الصيانة", count: 212, percentage: 51.96, color: "bg-red-500" },
  { category: "مواعيد الصيانة", count: 42, percentage: 10.29, color: "bg-orange-500" },
  { category: "أخرى", count: 37, percentage: 9.07, color: "bg-yellow-500" },
  { category: "ضعف جودة التشطيبات والمواد", count: 32, percentage: 7.84, color: "bg-blue-500" },
  { category: "سوء خدمات المبيعات", count: 25, percentage: 6.13, color: "bg-purple-500" },
  { category: "إهمال المرافق والخدمات المشتركة", count: 21, percentage: 5.15, color: "bg-green-500" },
  { category: "مشاكل الضمانات والمستندات", count: 18, percentage: 4.41, color: "bg-pink-500" },
  { category: "المرافق", count: 11, percentage: 2.70, color: "bg-indigo-500" },
];

export const ComplaintsDistributionSlide = () => {
  const maxPercentage = Math.max(...complaintsData.map(d => d.percentage));
  
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-light">توزيع الشكاوى حسب التصنيفات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Bar Chart */}
          <div className="space-y-4">
            {complaintsData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="relative h-10 bg-muted rounded-lg overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-end px-4`}
                    style={{ width: `${(item.percentage / maxPercentage) * 100}%` }}
                  >
                    <span className="text-white font-bold">{item.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table */}
          <Card className="p-6 overflow-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-medium">التصنيف</th>
                  <th className="py-3 px-4 font-medium">العدد</th>
                  <th className="py-3 px-4 font-medium">النسبة</th>
                </tr>
              </thead>
              <tbody>
                {complaintsData.map((item, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4">{item.category}</td>
                    <td className="py-4 px-4 font-bold">{item.count}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${item.color}`} />
                        {item.percentage}%
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="font-bold bg-primary/10">
                  <td className="py-4 px-4">الإجمالي</td>
                  <td className="py-4 px-4">409</td>
                  <td className="py-4 px-4">100%</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border-2 border-red-500/30 max-w-5xl mx-auto">
          <p className="text-2xl text-center leading-relaxed">
            <span className="font-bold text-red-600">الرؤية الرئيسية:</span> تمثل مشاكل الصيانة ومواعيدها 62.25% من إجمالي الشكاوى (254 شكوى من أصل 409)، مما يشير إلى أن نظام الصيانة يحتاج إلى إعادة هيكلة جذرية وشاملة
          </p>
        </div>
      </div>
    </Slide>
  );
};
