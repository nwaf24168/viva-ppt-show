import { Slide } from "../Slide";

export const ProjectsIntroSlide = () => {
  return (
    <Slide>
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            المشاريع
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-primary/60 rounded-full" />
        </div>

        <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          تحليل شامل لجميع المشاريع ومشاكل الصيانة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">47</div>
            <div className="text-muted-foreground">إجمالي المشاريع</div>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">3,574</div>
            <div className="text-muted-foreground">إجمالي الوحدات</div>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">7,778</div>
            <div className="text-muted-foreground">طلبات الصيانة المسجلة</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
