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
      
      <div className="relative z-10 text-center space-y-8 sm:space-y-12">
        <img 
          src={logo} 
          alt="Alramz Logo" 
          className="h-12 sm:h-14 md:h-16 mx-auto mb-8 sm:mb-12 md:mb-16"
        />
        
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight px-4">
            تحليل شكاوى العملاء
          </h1>
          
          <div className="h-1 w-24 sm:w-32 bg-primary mx-auto rounded-full" />
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-light px-4">
            استراتيجيات التحسين
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed px-4">
            تقديم توصيات شاملة للجودة الحرجة والعوامل الرئيسية لتحديد نقاط الشكوى لدى العملاء
          </p>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <span className="text-base sm:text-lg font-light">دراسة تحليلية متعمقة</span>
            <div className="hidden sm:block w-px h-6 bg-primary/30" />
            <span className="text-2xl sm:text-3xl font-bold text-primary">409</span>
          </div>
        </div>
      </div>
    </Slide>
  );
};
