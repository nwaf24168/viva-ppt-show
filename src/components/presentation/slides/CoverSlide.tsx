import { Slide } from "../Slide";
import backgroundImage from "@/assets/background.png";
import logo from "@/assets/logo.png";

export const CoverSlide = () => {
  return (
    <Slide className="relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center space-y-12">
        <img 
          src={logo} 
          alt="Alramz Logo" 
          className="h-16 mx-auto mb-16"
        />
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            تحليل شكاوى العملاء
          </h1>
          
          <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
          
          <h2 className="text-3xl md:text-4xl text-primary font-light">
            استراتيجيات التحسين
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
            تقديم توصيات شاملة للجودة الحرجة والعوامل الرئيسية لتحديد نقاط الشكوى لدى العملاء
          </p>
        </div>
        
        <div className="mt-16">
          <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full">
            <span className="text-lg font-light">دراسة تحليلية متعمقة</span>
            <div className="w-px h-6 bg-primary/30" />
            <span className="text-3xl font-bold text-primary">409</span>
          </div>
        </div>
      </div>
    </Slide>
  );
};
