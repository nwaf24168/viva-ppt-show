import { Slide } from "../Slide";
import { AlertTriangle, Clock, Users, Wrench } from "lucide-react";

const maintenanceIssues = [
  {
    icon: AlertTriangle,
    title: "عدم حل المشاكل نهائياً",
    description: "المشاكل تعود مرة أخرى بعد الإصلاح، مما يدل على عدم معالجة الأسباب الجذرية",
    severity: "critical"
  },
  {
    icon: Clock,
    title: "تأخر كبير في الاستجابة",
    description: "العملاء يشتكون من انتظار أيام وأسابيع وأحياناً شهور لحل مشاكل الصيانة البسيطة",
    severity: "high"
  },
  {
    icon: Wrench,
    title: "ضعف جودة الصيانة",
    description: "أعمال الصيانة غير احترافية تتطلب إعادة إصلاح متكررة",
    severity: "high"
  },
  {
    icon: Users,
    title: "ضعف التواصل",
    description: "صعوبة في الوصول لفريق الصيانة وعدم الرد على الاتصالات والرسائل",
    severity: "medium"
  }
];

const maintenanceStats = [
  { label: "مشاكل الصيانة العامة", count: 212, percentage: 51.96, color: "bg-red-600" },
  { label: "مواعيد الصيانة", count: 42, percentage: 10.29, color: "bg-orange-600" },
  { label: "تعامل فريق الصيانة", count: 7, percentage: 1.72, color: "bg-yellow-600" },
];

export const MaintenanceProblemsSlide = () => {
  return (
    <Slide>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-red-500/10 px-6 py-3 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <span className="text-lg font-medium text-red-600">التحليل الأول</span>
          </div>
          <h2 className="text-5xl font-light">مشاكل الصيانة</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-10 border-2 border-red-500/30 max-w-6xl mx-auto">
          <p className="text-2xl text-center leading-relaxed mb-8">
            تمثل مشاكل الصيانة بجميع أشكالها <span className="font-bold text-red-600 text-3xl">62.25%</span> من إجمالي الشكاوى، مما يشير إلى وجود <span className="font-bold text-red-600">أزمة حقيقية</span> في نظام الصيانة تتطلب إعادة هيكلة جذرية وشاملة
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {maintenanceStats.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center space-y-3">
                <div className={`${stat.color} text-white text-4xl font-bold rounded-lg py-4`}>
                  {stat.count}
                </div>
                <div className="text-lg font-medium">{stat.label}</div>
                <div className="text-2xl text-primary font-bold">{stat.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light text-center mb-8">المشاكل الرئيسية المتكررة في شكاوى الصيانة</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenanceIssues.map((issue, index) => (
              <div
                key={index}
                className={`bg-card border-2 rounded-2xl p-6 space-y-4 ${
                  issue.severity === 'critical' 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : issue.severity === 'high'
                    ? 'border-orange-500/50 bg-orange-500/5'
                    : 'border-yellow-500/50 bg-yellow-500/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                    issue.severity === 'critical' 
                      ? 'bg-red-500/20' 
                      : issue.severity === 'high'
                      ? 'bg-orange-500/20'
                      : 'bg-yellow-500/20'
                  }`}>
                    <issue.icon className={`w-7 h-7 ${
                      issue.severity === 'critical' 
                        ? 'text-red-600' 
                        : issue.severity === 'high'
                        ? 'text-orange-600'
                        : 'text-yellow-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h4 className="text-xl font-medium">{issue.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 border border-red-200 dark:border-red-900 max-w-5xl mx-auto">
          <h4 className="text-2xl font-medium text-center mb-4 text-red-700 dark:text-red-400">مشكلة إضافية:</h4>
          <p className="text-xl text-center leading-relaxed">
            <span className="font-bold">عدم الالتزام بالمواعيد:</span> عدم احترام المواعيد المحددة للصيانة أو التأخر الشديد في الحضور والرسائل
          </p>
        </div>
      </div>
    </Slide>
  );
};
