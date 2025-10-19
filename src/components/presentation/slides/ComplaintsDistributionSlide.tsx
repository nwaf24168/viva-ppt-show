import { Slide } from "../Slide";
import { Card } from "@/components/ui/card";

const complaintsData = [
  { category: "مشاكل الصيانة", count: 230, percentage: 57.79, color: "bg-red-500" },
  { category: "مواعيد الصيانة", count: 42, percentage: 10.55, color: "bg-orange-500" },
  { category: "ضعف جودة التشطيبات والمواد", count: 50, percentage: 12.56, color: "bg-blue-500" },
  { category: "شركة المرافق والمساحات المشتركة", count: 32, percentage: 8.04, color: "bg-green-500" },
  { category: "سوء خدمات المبيعات", count: 25, percentage: 6.28, color: "bg-purple-500" },
  { category: "مشاكل الضمانات والمستندات", count: 19, percentage: 4.77, color: "bg-pink-500" },
];

export const ComplaintsDistributionSlide = () => {
  const maxPercentage = Math.max(...complaintsData.map(d => d.percentage));
  
  return (
    <Slide>
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-4">توزيع الشكاوى حسب التصنيفات</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
          {/* Bar Chart */}
          <div className="space-y-3 sm:space-y-4">
            {complaintsData.map((item, index) => (
              <div key={index} className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="relative h-8 sm:h-10 bg-muted rounded-lg overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-end px-3 sm:px-4`}
                    style={{ width: `${(item.percentage / maxPercentage) * 100}%` }}
                  >
                    <span className="text-white text-sm sm:text-base font-bold">{item.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table */}
          <Card className="p-4 sm:p-6 overflow-x-auto">
            <div className="min-w-[300px]">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base font-medium">التصنيف</th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base font-medium">العدد</th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base font-medium">النسبة</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintsData.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base">{item.category}</td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base font-bold">{item.count}</td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2">
                          <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${item.color}`} />
                          {item.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-primary/10">
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base">الإجمالي</td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base">398</td>
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-base">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-red-500/30 max-w-5xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-relaxed">
              <span className="font-bold text-red-600">الرؤية الرئيسية:</span> تمثل مشاكل الصيانة ومواعيدها 68.34% من إجمالي الشكاوى (272 شكوى من أصل 398)، مما يشير إلى أن نظام الصيانة يحتاج إلى إعادة هيكلة جذرية وشاملة
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-center mb-4 sm:mb-6">أمثلة واقعية من شكاوى العملاء</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {complaintsData.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.color}`} />
                    <h4 className="text-sm sm:text-base md:text-lg font-bold">{item.category}</h4>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed italic">
                    {index === 0 && '"التجاوب بشكل افضل في حلول مشاكل الصيانه.. عندي مشكله من وقت الاستلام ولم يتم حلها ع الرغم من زياره اكثر مهندس لي"'}
                    {index === 1 && '"الالتزام بالمواعيد الخاصه بالصيانه - عندي مكيف فيه تسريب وصوت من ٥ شهور الى الان ما صار عليهم اي شي"'}
                    {index === 2 && '"للاسف ضعف جودة المواد المستخدمة لاسيما الابواب والالمنيوم. وعند سؤالهم لماذا الجودة متدنية افادوا ان هذه مواصفات شركة الرمز"'}
                    {index === 3 && '"الاهتمام بالمرافق حقيقة النادي جدا مهمل والادوات فيه سيئة ايضا شفاطات الهواء بالمطبخ ضعيفه"'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
