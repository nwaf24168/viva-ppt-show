import { Slide } from "../Slide";
import { projectsData } from "@/utils/projectsData";
import { Card } from "@/components/ui/card";

interface ProjectDetailsSlideProp {
  projectIndex: number;
}

export const ProjectDetailsSlide = ({ projectIndex }: ProjectDetailsSlideProp) => {
  const project = projectsData[projectIndex];
  
  if (!project) return null;

  return (
    <Slide>
      <div className="space-y-6 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="text-base text-muted-foreground">المشروع رقم {project.slideNumber}</div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent break-words px-4">
            {project.projectName}
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl md:text-2xl text-foreground font-medium">{project.projectType}</p>
            <p className="text-lg md:text-xl text-muted-foreground">{project.location}</p>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-primary/60 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-primary">معلومات المشروع</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">قيمة المشروع</span>
                <span className="font-semibold">{project.value} ريال</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">عدد الوحدات</span>
                <span className="font-semibold">{project.totalUnits} وحدة</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">طلبات الصيانة</span>
                <span className="font-semibold">{project.maintenanceRequests}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">الضمانات السارية</span>
                <span className="font-semibold text-sm">{project.activeWarranties}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-primary">أبرز المشاكل</h3>
            
            <div className="space-y-3">
              {project.mainProblems === "غير محدد" ? (
                <div className="text-center py-8 text-muted-foreground">
                  لا توجد مشاكل مسجلة
                </div>
              ) : (
                <div className="space-y-2">
                  {project.mainProblems.split("، ").map((problem, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <span className="text-sm">{problem}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>

        {project.maintenanceRequests !== "غير محدد" && (
          <Card className="p-6 mt-6 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {project.maintenanceRequests !== "غير محدد" && project.totalUnits > 0
                    ? (parseInt(project.maintenanceRequests) / project.totalUnits).toFixed(2)
                    : "0"}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  متوسط عدد الصيانة لكل وحدة
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Slide>
  );
};
