export interface Project {
  slideNumber: number;
  projectName: string;
  projectType: string;
  location: string;
  value: string;
  totalUnits: number;
  maintenanceRequests: string;
  activeWarranties: string;
  mainProblems: string;
  avgMaintenanceTime?: string; // متوسط مدة تنفيذ شكوى الصيانة
}

export const projectsData: Project[] = [
  {
    slideNumber: 1,
    projectName: "رمز 11",
    projectType: "شقق سكنية",
    location: "الرياض / عرقة",
    value: "9,100,000",
    totalUnits: 112,
    maintenanceRequests: "غير محدد",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 2,
    projectName: "رمز 13",
    projectType: "شقق سكنية",
    location: "الرياض / الوادي",
    value: "14,700,000",
    totalUnits: 21,
    maintenanceRequests: "غير محدد",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 3,
    projectName: "رمز 15",
    projectType: "شقق /فلل",
    location: "الرياض / الملقا",
    value: "69,889,025",
    totalUnits: 96,
    maintenanceRequests: "17",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريب من الاسقف (5)، تسريبات (سباكة) (4)، دهانات (2)"
  },
  {
    slideNumber: 4,
    projectName: "رمز 17",
    projectType: "فلل سكنية",
    location: "الرياض / الندى",
    value: "79,131,751",
    totalUnits: 87,
    maintenanceRequests: "5",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "السباكة (2)، تسريبات (سباكة) (2)، تسريب من الاسقف (1)",
    avgMaintenanceTime: "17 يوم و 14 ساعة و 39 دقيقة"
  },
  {
    slideNumber: 5,
    projectName: "رمز 19",
    projectType: "شقق سكنية",
    location: "الرياض / قرطبة",
    value: "68,011,960",
    totalUnits: 100,
    maintenanceRequests: "69",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (15)، تسريبات (سباكة) (12)، تسريب من الاسقف (10)",
    avgMaintenanceTime: "8 يوم و 22 ساعة و 54 دقيقة"
  },
  {
    slideNumber: 6,
    projectName: "رمز 21",
    projectType: "شقق سكنية",
    location: "الرياض / النخيل",
    value: "24,207,440",
    totalUnits: 26,
    maintenanceRequests: "11",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تكييف (4)، تسريب من الاسقف (4)، المنيوم (2)",
    avgMaintenanceTime: "3 يوم و 21 ساعة و 56 دقيقة"
  },
  {
    slideNumber: 7,
    projectName: "رمز 23",
    projectType: "شقق سكنية",
    location: "الرياض / الياسمين",
    value: "17,994,500",
    totalUnits: 24,
    maintenanceRequests: "11",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريبات (سباكة) (4)، تسريب من الاسقف (2)، المنيوم (2)"
  },
  {
    slideNumber: 8,
    projectName: "رمز 24",
    projectType: "أدوار سكنية",
    location: "الرياض / الياسمين",
    value: "12,872,100",
    totalUnits: 12,
    maintenanceRequests: "16",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريب من الاسقف (5)، بلاط (5)، التماس كهربائي (2)",
    avgMaintenanceTime: "36 يوم و 20 ساعة و 36 دقيقة"
  },
  {
    slideNumber: 9,
    projectName: "رمز 25",
    projectType: "شقق سكنية",
    location: "الرياض / الياسمين",
    value: "110,688,000",
    totalUnits: 112,
    maintenanceRequests: "230",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (40)، كهرباء (32)، تكييف (32)",
    avgMaintenanceTime: "4 يوم و 4 ساعة و 56 دقيقة"
  },
  {
    slideNumber: 10,
    projectName: "رمز 26",
    projectType: "فلل سكنية",
    location: "الرياض / الياسمين",
    value: "50,951,000",
    totalUnits: 18,
    maintenanceRequests: "115",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريبات (سباكة) (17)، بلاط (17)، تسريب من الاسقف (17)",
    avgMaintenanceTime: "12 يوم و 2 ساعة و 59 دقيقة"
  },
  {
    slideNumber: 11,
    projectName: "رمز 27",
    projectType: "شقق سكنية",
    location: "الخبر / الحمراء",
    value: "51,719,000",
    totalUnits: 77,
    maintenanceRequests: "101",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريب من الاسقف (23)، دهانات (17)، سمارت هوم (12)",
    avgMaintenanceTime: "54 يوم و 17 ساعة و 22 دقيقة"
  },
  {
    slideNumber: 12,
    projectName: "رمز 29",
    projectType: "شقق سكنية",
    location: "الرياض / الياسمين",
    value: "20,419,500",
    totalUnits: 26,
    maintenanceRequests: "35",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريب من الاسقف (13)، تسريبات (سباكة) (5)، دهانات (4)",
    avgMaintenanceTime: "16 يوم و 7 ساعة و 38 دقيقة"
  },
  {
    slideNumber: 13,
    projectName: "رمز 30",
    projectType: "فلل سكنية",
    location: "الرياض / الياسمين",
    value: "15,950,000",
    totalUnits: 6,
    maintenanceRequests: "31",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريب من الاسقف (10)، المنيوم (5)، دهانات (5)"
  },
  {
    slideNumber: 14,
    projectName: "رمز 31",
    projectType: "شقق سكنية",
    location: "الرياض / الياسمين",
    value: "17,994,500",
    totalUnits: 57,
    maintenanceRequests: "41",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "كهرباء (9)، سباكة (7)، تسريب من الاسقف (6)",
    avgMaintenanceTime: "2 يوم و 19 ساعة و 29 دقيقة"
  },
  {
    slideNumber: 15,
    projectName: "رمز 33",
    projectType: "شقق سكنية",
    location: "الرياض / قرطبة",
    value: "17,994,500",
    totalUnits: 53,
    maintenanceRequests: "111",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "تسريبات (سباكة) (20)، كهرباء (18)، دهانات (16)",
    avgMaintenanceTime: "9 يوم و 21 ساعة و 31 دقيقة"
  },
  {
    slideNumber: 16,
    projectName: "رمز 35",
    projectType: "أدوار سكنية",
    location: "الرياض / حطين",
    value: "17,994,500",
    totalUnits: 20,
    maintenanceRequests: "92",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (33)، تسريبات (سباكة) (16)، تسريب من الاسقف (9)",
    avgMaintenanceTime: "36 يوم و 13 ساعة و 9 دقيقة"
  },
  {
    slideNumber: 17,
    projectName: "رمز 36",
    projectType: "فلل سكنية",
    location: "الرياض / حطين",
    value: "17,994,500",
    totalUnits: 9,
    maintenanceRequests: "34",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (12)، تسريب من الاسقف (8)، تسريبات (سباكة) (3)"
  },
  {
    slideNumber: 18,
    projectName: "رمز 37",
    projectType: "تاون هاوس",
    location: "الرياض / حطين",
    value: "17,994,500",
    totalUnits: 24,
    maintenanceRequests: "77",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "دهانات (16)، سباكة (13)، تسريبات (سباكة) (12)",
    avgMaintenanceTime: "20 يوم و 17 ساعة و 43 دقيقة"
  },
  {
    slideNumber: 19,
    projectName: "فسيلة",
    projectType: "مكاتب",
    location: "الرياض / الملقا",
    value: "47,500,000",
    totalUnits: 11,
    maintenanceRequests: "111",
    activeWarranties: "الضمان الشامل",
    mainProblems: "تكييف (37)، المنيوم (21)، كهرباء (21)"
  },
  {
    slideNumber: 20,
    projectName: "رمز 41",
    projectType: "شقق سكنية",
    location: "الرياض / حطين",
    value: "106,000,000",
    totalUnits: 106,
    maintenanceRequests: "487",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (91)، دهانات (85)، كهرباء (64)",
    avgMaintenanceTime: "34 يوم و 22 ساعة و 26 دقيقة"
  },
  {
    slideNumber: 21,
    projectName: "رمز 45",
    projectType: "شقق سكنية",
    location: "الخبر / الحمراء",
    value: "غير محدد",
    totalUnits: 124,
    maintenanceRequests: "242",
    activeWarranties: "الضمان الشامل",
    mainProblems: "سباكة (60)، كهرباء (47)، دهانات (41)"
  },
  {
    slideNumber: 22,
    projectName: "رمز 48",
    projectType: "فلل سكنية",
    location: "الرياض / الريان",
    value: "60,000,000",
    totalUnits: 18,
    maintenanceRequests: "214",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "بلاط (41)، سباكة (40)، تسريبات (سباكة) (27)",
    avgMaintenanceTime: "39 يوم و 13 ساعة و 34 دقيقة"
  },
  {
    slideNumber: 23,
    projectName: "رمز النخيل 1 فلل",
    projectType: "فلل سكنية",
    location: "الخبر / النخيل",
    value: "35,000,000",
    totalUnits: 15,
    maintenanceRequests: "930",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "دهانات (167)، سباكة (138)، تكييف (123)",
    avgMaintenanceTime: "54 يوم و 9 ساعة و 22 دقيقة"
  },
  {
    slideNumber: 24,
    projectName: "رمز النخيل 1 شقق",
    projectType: "شقق سكنية",
    location: "الخبر / الصدفة",
    value: "غير محدد",
    totalUnits: 113,
    maintenanceRequests: "930",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "دهانات (167)، سباكة (138)، تكييف (123)",
    avgMaintenanceTime: "54 يوم و 9 ساعة و 22 دقيقة"
  },
  {
    slideNumber: 25,
    projectName: "تل الرمال A",
    projectType: "شقق سكنية",
    location: "الرياض / الرمال",
    value: "غير محدد",
    totalUnits: 78,
    maintenanceRequests: "503",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (149)، دهانات (96)، كهرباء (42)",
    avgMaintenanceTime: "38 يوم و 8 ساعة و 3 دقيقة"
  },
  {
    slideNumber: 26,
    projectName: "تل الرمال B",
    projectType: "شقق سكنية",
    location: "الرياض / الرمال",
    value: "غير محدد",
    totalUnits: 67,
    maintenanceRequests: "503",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (149)، دهانات (96)، كهرباء (42)",
    avgMaintenanceTime: "38 يوم و 8 ساعة و 3 دقيقة"
  },
  {
    slideNumber: 27,
    projectName: "تل الرمال المالية A",
    projectType: "شقق سكنية",
    location: "الرياض / الرمال",
    value: "غير محدد",
    totalUnits: 78,
    maintenanceRequests: "863",
    activeWarranties: "الضمان الشامل",
    mainProblems: "سباكة (292)، كهرباء (145)، دهانات (126)",
    avgMaintenanceTime: "38 يوم و 8 ساعة و 3 دقيقة"
  },
  {
    slideNumber: 28,
    projectName: "تل الرمال المالية B",
    projectType: "شقق سكنية",
    location: "الرياض / الرمال",
    value: "غير محدد",
    totalUnits: 67,
    maintenanceRequests: "863",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (292)، كهرباء (145)، دهانات (126)",
    avgMaintenanceTime: "38 يوم و 8 ساعة و 3 دقيقة"
  },
  {
    slideNumber: 29,
    projectName: "نقش فيلا",
    projectType: "فلل سكنية",
    location: "الرياض / المونسية",
    value: "غير محدد",
    totalUnits: 28,
    maintenanceRequests: "400",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (113)، كهرباء (51)، دهانات (50)",
    avgMaintenanceTime: "40 يوم و 21 ساعة و 39 دقيقة"
  },
  {
    slideNumber: 30,
    projectName: "ستون كومبلكس",
    projectType: "شقق سكنية",
    location: "الرياض / العقيق",
    value: "غير محدد",
    totalUnits: 71,
    maintenanceRequests: "269",
    activeWarranties: "الضمان الشامل",
    mainProblems: "سباكة (75)، تكييف (45)، سمارت هوم (31)"
  },
  {
    slideNumber: 31,
    projectName: "جديل",
    projectType: "أدوار سكنية",
    location: "الرياض / النرجس",
    value: "غير محدد",
    totalUnits: 32,
    maintenanceRequests: "472",
    activeWarranties: "الضمان الشامل",
    mainProblems: "سباكة (98)، كهرباء (80)، المنيوم (65)"
  },
  {
    slideNumber: 32,
    projectName: "رمز المعالي",
    projectType: "فلل سكنية",
    location: "الدمام / المعالي",
    value: "غير محدد",
    totalUnits: 48,
    maintenanceRequests: "671",
    activeWarranties: "العزل والهيكل الإنشائي",
    mainProblems: "سباكة (118)، دهانات (111)، كهرباء (91)",
    avgMaintenanceTime: "4 يوم و 8 ساعة و 1 دقيقة"
  },
  {
    slideNumber: 33,
    projectName: "رمز ثروة",
    projectType: "شقق سكنية",
    location: "الدمام / ثروة",
    value: "غير محدد",
    totalUnits: 174,
    maintenanceRequests: "112",
    activeWarranties: "الضمان الشامل",
    mainProblems: "دهانات (20)، سباكة (18)، بلاط (17)"
  },
  {
    slideNumber: 34,
    projectName: "رافد",
    projectType: "مكاتب",
    location: "الرياض / حطين",
    value: "غير محدد",
    totalUnits: 98,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 35,
    projectName: "يسير فيليج",
    projectType: "شقق سكنية",
    location: "جدة / السلامة",
    value: "غير محدد",
    totalUnits: 144,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 36,
    projectName: "ايكه فلل",
    projectType: "فلل سكنية",
    location: "القصيم / مبروكة",
    value: "غير محدد",
    totalUnits: 14,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 37,
    projectName: "ايكه شقق",
    projectType: "شقق سكنية",
    location: "القصيم / مبروكة",
    value: "غير محدد",
    totalUnits: 17,
    maintenanceRequests: "غير محدد",
    activeWarranties: "العزل والهيكل الأنشائي",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 38,
    projectName: "ايكه تاون هاوس",
    projectType: "تاون هاوس",
    location: "القصيم / مبروكة",
    value: "غير محدد",
    totalUnits: 24,
    maintenanceRequests: "غير محدد",
    activeWarranties: "العزل والهيكل الأنشائي",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 39,
    projectName: "جوهرة الرمز",
    projectType: "شقق سكنية",
    location: "الرياض / خزام",
    value: "غير محدد",
    totalUnits: 521,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 40,
    projectName: "برج الملك سلمان",
    projectType: "مكاتب",
    location: "الرياض / الملقا",
    value: "غير محدد",
    totalUnits: 100,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 41,
    projectName: "ري النخيل",
    projectType: "مكاتب",
    location: "الرياض / النخيل",
    value: "غير محدد",
    totalUnits: 73,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 42,
    projectName: "سديم فلل",
    projectType: "فلل",
    location: "الرياض / الصفا",
    value: "غير محدد",
    totalUnits: 90,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 43,
    projectName: "سديم شقق",
    projectType: "شقق سكنية",
    location: "الرياض / الصفا",
    value: "غير محدد",
    totalUnits: 120,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 44,
    projectName: "الريان 2",
    projectType: "فلل سكنية",
    location: "الرياض / الريان",
    value: "غير محدد",
    totalUnits: 9,
    maintenanceRequests: "27",
    activeWarranties: "الضمان الشامل",
    mainProblems: "تسريبات (سباكة) (6)، سباكة (6)، بلاط (4)"
  },
  {
    slideNumber: 45,
    projectName: "درة الملك خالد",
    projectType: "مكاتب",
    location: "الرياض / حطين",
    value: "غير محدد",
    totalUnits: 315,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 46,
    projectName: "لوليا",
    projectType: "فلل سكنية",
    location: "الخبر / المهندسين",
    value: "غير محدد",
    totalUnits: 30,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  },
  {
    slideNumber: 47,
    projectName: "فلل الرمال",
    projectType: "فلل سكنية",
    location: "الرياض / الرمال",
    value: "غير محدد",
    totalUnits: 282,
    maintenanceRequests: "غير محدد",
    activeWarranties: "الضمان الشامل",
    mainProblems: "غير محدد"
  }
];
