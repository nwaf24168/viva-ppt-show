// تحليل بيانات الصيانة من الملف وحساب متوسط الوقت
// البيانات من الملف المرفق

export interface MaintenanceRecord {
  projectName: string;
  creationDate: string;
  closedDate: string;
}

// البيانات المستخرجة من الملف لحساب المتوسطات
const maintenanceData: Record<string, { total: number; count: number }> = {};

// حساب الفرق بالأيام والساعات والدقائق
export const calculateDuration = (start: string, end: string): { days: number; hours: number; minutes: number; totalMinutes: number } | null => {
  if (!start || !end || start === '-' || end === '-') return null;
  
  try {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return null;
    if (endDate < startDate) return null; // تجاهل التواريخ الخاطئة
    
    const diffMs = endDate.getTime() - startDate.getTime();
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;
    
    return { days, hours, minutes, totalMinutes };
  } catch {
    return null;
  }
};

// تنسيق المدة كنص
export const formatDuration = (duration: { days: number; hours: number; minutes: number } | null): string => {
  if (!duration) return "غير محدد";
  
  const parts: string[] = [];
  if (duration.days > 0) parts.push(`${duration.days} يوم`);
  if (duration.hours > 0) parts.push(`${duration.hours} ساعة`);
  if (duration.minutes > 0) parts.push(`${duration.minutes} دقيقة`);
  
  return parts.length > 0 ? parts.join(" و ") : "أقل من دقيقة";
};

// متوسطات الوقت المحسوبة لكل مشروع (بالدقائق)
export const projectMaintenanceAverages: Record<string, number> = {
  "رمز 17": 25319, // 17 يوم 14 ساعة 39 دقيقة
  "رمز 18": 0,
  "رمز 19": 12894, // 8 يوم 22 ساعة 54 دقيقة
  "رمز المعالي": 6241, // 4 يوم 8 ساعة 1 دقيقة
  "الرمز 21": 5636, // 3 يوم 21 ساعة 56 دقيقة
  "رمز 24": 53076, // 36 يوم 20 ساعة 36 دقيقة
  "رمز 25": 6056, // 4 يوم 4 ساعة 56 دقيقة
  "رمز 26": 17479, // 12 يوم 2 ساعة 59 دقيقة
  "رمز 27": 78842, // 54 يوم 17 ساعة 22 دقيقة
  "الرمز 29": 23498, // 16 يوم 7 ساعة 38 دقيقة
  "رمز 31": 4049, // 2 يوم 19 ساعة 29 دقيقة
  "رمز 33": 14291, // 9 يوم 21 ساعة 31 دقيقة
  "رمز 35": 52689, // 36 يوم 13 ساعة 9 دقيقة
  "رمز 36": 0,
  "رمز 37": 29843, // 20 يوم 17 ساعة 43 دقيقة
  "رمز النخيل": 78322, // 54 يوم 9 ساعة 22 دقيقة
  "رمز 41": 50346, // 34 يوم 22 ساعة 26 دقيقة
  "رمز 48": 56974, // 39 يوم 13 ساعة 34 دقيقة
  "تل الرمال": 55203, // 38 يوم 8 ساعة 3 دقيقة
  "نَقْش فيلا": 58899, // 40 يوم 21 ساعة 39 دقيقة
};

// دالة للحصول على متوسط الوقت المنسق
export const getFormattedAverageTime = (projectName: string): string => {
  const avgMinutes = projectMaintenanceAverages[projectName];
  
  if (!avgMinutes || avgMinutes === 0) {
    return "غير محدد";
  }
  
  const days = Math.floor(avgMinutes / (60 * 24));
  const hours = Math.floor((avgMinutes % (60 * 24)) / 60);
  const minutes = avgMinutes % 60;
  
  return formatDuration({ days, hours, minutes });
};
