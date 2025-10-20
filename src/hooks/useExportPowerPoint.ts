import PptxGenJS from "pptxgenjs";
import { presentationData } from "@/utils/exportData";
import { toast } from "sonner";

export const useExportPowerPoint = () => {
  const exportToPowerPoint = async () => {
    try {
      toast.loading("جاري تصدير العرض التقديمي...");
      
      const pptx = new PptxGenJS();
      pptx.layout = "LAYOUT_16x9";
      pptx.author = "الرمز العقارية";
      pptx.title = "تحليل صوت العميل (VOC)";
      pptx.rtlMode = true;

      // Define colors
      const colors = {
        primary: "2563eb",
        background: "1a1f2e",
        text: "ffffff",
        muted: "94a3b8",
        accent: "3b82f6"
      };

      // Slide 1: Cover
      const slide1 = pptx.addSlide();
      slide1.background = { color: colors.background };
      slide1.addText("تحليل شكاوى العملاء", { 
        x: 1, y: 2.5, w: 8, h: 1, 
        fontSize: 44, bold: true, color: colors.text, align: "center", rtlMode: true 
      });
      slide1.addText("استراتيجيات التحسين", { 
        x: 1, y: 3.5, w: 8, h: 0.6, 
        fontSize: 28, color: colors.primary, align: "center", rtlMode: true 
      });
      slide1.addText(`دراسة تحليلية متعمقة • ${presentationData.totalComplaints} شكوى`, { 
        x: 1, y: 4.5, w: 8, h: 0.5, 
        fontSize: 20, color: colors.muted, align: "center" 
      });

      // Slide 2: Table of Contents
      const slide2 = pptx.addSlide();
      slide2.background = { color: colors.background };
      slide2.addText("جدول المحتويات", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });
      
      presentationData.tableOfContents.forEach((item, index) => {
        const yPos = 1.5 + (index * 0.65);
        slide2.addText(`${item.number}. ${item.title}`, { 
          x: 0.8, y: yPos, w: 8.4, h: 0.3, 
          fontSize: 16, bold: true, color: colors.text, align: "right", rtlMode: true 
        });
        slide2.addText(item.subtitle, { 
          x: 0.8, y: yPos + 0.3, w: 8.4, h: 0.25, 
          fontSize: 12, color: colors.muted, align: "right", rtlMode: true 
        });
      });

      // Slide 3: VOC Introduction
      const slide3 = pptx.addSlide();
      slide3.background = { color: colors.background };
      slide3.addText("ما هو صوت العميل", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });
      slide3.addText("صوت العميل (VOC) هو عملية منهجية لجمع وفهم وتحليل احتياجات العملاء وتوقعاتهم وتفضيلاتهم", { 
        x: 1, y: 1.5, w: 8, h: 1, 
        fontSize: 18, color: colors.text, align: "center", rtlMode: true 
      });

      // Slide 4: Data Overview
      const slide4 = pptx.addSlide();
      slide4.background = { color: colors.background };
      slide4.addText("نظرة عامة على البيانات", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });
      
      presentationData.dataOverview.stats.forEach((stat, index) => {
        const xPos = 1 + (index * 2.8);
        slide4.addText(stat.number, { 
          x: xPos, y: 2, w: 2.5, h: 0.8, 
          fontSize: 48, bold: true, color: colors.primary, align: "center" 
        });
        slide4.addText(stat.label, { 
          x: xPos, y: 2.8, w: 2.5, h: 0.5, 
          fontSize: 16, color: colors.text, align: "center", rtlMode: true 
        });
      });

      // Add data sources
      slide4.addText("مصدر البيانات:", { 
        x: 1, y: 4, w: 8, h: 0.4, 
        fontSize: 18, bold: true, color: colors.text, align: "right", rtlMode: true 
      });
      presentationData.dataOverview.dataSources.forEach((source, index) => {
        slide4.addText(source, { 
          x: 1.5, y: 4.5 + (index * 0.3), w: 7, h: 0.25, 
          fontSize: 14, color: colors.muted, align: "right", rtlMode: true 
        });
      });

      // Slide 5: Complaints Distribution
      const slide5 = pptx.addSlide();
      slide5.background = { color: colors.background };
      slide5.addText("توزيع الشكاوى حسب التصنيفات", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 32, bold: true, color: colors.text, align: "center", rtlMode: true 
      });

      const chartData = presentationData.complaintsDistribution.map(item => ({
        name: item.category,
        labels: [item.category],
        values: [item.count]
      }));

      slide5.addChart(pptx.ChartType.bar, chartData, {
        x: 0.5, y: 1.5, w: 9, h: 4,
        barDir: "bar",
        showValue: true,
        catAxisLabelFontSize: 11,
        valAxisLabelFontSize: 11,
        showTitle: false,
        valAxisMaxVal: 250
      });

      // Slide 6: CTQ Factors
      const slide6 = pptx.addSlide();
      slide6.background = { color: colors.background };
      slide6.addText("العوامل الثمانية الحرجة للجودة", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 32, bold: true, color: colors.text, align: "center", rtlMode: true 
      });

      presentationData.ctqFactors.slice(0, 4).forEach((factor, index) => {
        const xPos = 0.5 + (index % 2) * 5;
        const yPos = 1.5 + Math.floor(index / 2) * 2;
        
        slide6.addText(`${factor.number}. ${factor.title}`, { 
          x: xPos, y: yPos, w: 4.5, h: 0.4, 
          fontSize: 16, bold: true, color: colors.primary, align: "right", rtlMode: true 
        });
        slide6.addText(factor.description, { 
          x: xPos, y: yPos + 0.45, w: 4.5, h: 0.6, 
          fontSize: 12, color: colors.text, align: "right", rtlMode: true 
        });
        slide6.addText(factor.impact, { 
          x: xPos, y: yPos + 1.1, w: 4.5, h: 0.3, 
          fontSize: 12, bold: true, color: colors.accent, align: "right", rtlMode: true 
        });
      });

      // Slide 7: CTQ Factors (continued)
      const slide7 = pptx.addSlide();
      slide7.background = { color: colors.background };
      slide7.addText("العوامل الثمانية الحرجة للجودة (تابع)", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 32, bold: true, color: colors.text, align: "center", rtlMode: true 
      });

      presentationData.ctqFactors.slice(4).forEach((factor, index) => {
        const xPos = 0.5 + (index % 2) * 5;
        const yPos = 1.5 + Math.floor(index / 2) * 2;
        
        slide7.addText(`${factor.number}. ${factor.title}`, { 
          x: xPos, y: yPos, w: 4.5, h: 0.4, 
          fontSize: 16, bold: true, color: colors.primary, align: "right", rtlMode: true 
        });
        slide7.addText(factor.description, { 
          x: xPos, y: yPos + 0.45, w: 4.5, h: 0.6, 
          fontSize: 12, color: colors.text, align: "right", rtlMode: true 
        });
        slide7.addText(factor.impact, { 
          x: xPos, y: yPos + 1.1, w: 4.5, h: 0.3, 
          fontSize: 12, bold: true, color: colors.accent, align: "right", rtlMode: true 
        });
      });

      // Slide 8: Keywords Analysis
      const slide8 = pptx.addSlide();
      slide8.background = { color: colors.background };
      slide8.addText("تحليل الكلمات المفتاحية", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });

      presentationData.topKeywords.forEach((keyword, index) => {
        const yPos = 1.8 + (index * 0.6);
        slide8.addText(keyword.word, { 
          x: 5, y: yPos, w: 3, h: 0.4, 
          fontSize: 18, bold: true, color: colors.text, align: "right", rtlMode: true 
        });
        slide8.addText(keyword.count.toString(), { 
          x: 2, y: yPos, w: 2, h: 0.4, 
          fontSize: 24, bold: true, color: colors.primary, align: "center" 
        });
      });

      // Slide 9: Recommendations Part 1
      const slide9 = pptx.addSlide();
      slide9.background = { color: colors.background };
      slide9.addText("التوصيات وخطة العمل", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });

      presentationData.recommendations.forEach((rec, index) => {
        const yPos = 1.5 + (index * 2.2);
        
        slide9.addText(`${rec.priority}: ${rec.title}`, { 
          x: 0.8, y: yPos, w: 8.4, h: 0.4, 
          fontSize: 18, bold: true, color: "ef4444", align: "right", rtlMode: true 
        });
        
        rec.actions.forEach((action, actionIndex) => {
          slide9.addText(`• ${action}`, { 
            x: 1.2, y: yPos + 0.5 + (actionIndex * 0.35), w: 7.6, h: 0.3, 
            fontSize: 12, color: colors.text, align: "right", rtlMode: true 
          });
        });
        
        slide9.addText(`KPI: ${rec.kpi}`, { 
          x: 1.2, y: yPos + 1.6, w: 7.6, h: 0.3, 
          fontSize: 12, bold: true, color: colors.accent, align: "right", rtlMode: true 
        });
      });

      // Slide 10: Conclusion
      const slide10 = pptx.addSlide();
      slide10.background = { color: colors.background };
      slide10.addText("الخلاصة", { 
        x: 0.5, y: 0.5, w: 9, h: 0.6, 
        fontSize: 36, bold: true, color: colors.text, align: "center", rtlMode: true 
      });
      
      slide10.addText("النتائج الرئيسية", { 
        x: 1, y: 1.5, w: 8, h: 0.5, 
        fontSize: 24, bold: true, color: colors.primary, align: "center", rtlMode: true 
      });

      const conclusions = [
        "62.25% من الشكاوى مرتبطة بالصيانة - الأولوية القصوى",
        "8 عوامل حرجة للجودة تؤثر مباشرة على رضا العملاء",
        "تحسين التواصل يتطلب حلولاً فورية ونظام استجابة سريع",
        "خطة عمل واضحة مع مؤشرات أداء محددة لقياس التحسين"
      ];

      conclusions.forEach((conclusion, index) => {
        slide10.addText(`• ${conclusion}`, { 
          x: 1, y: 2.5 + (index * 0.6), w: 8, h: 0.5, 
          fontSize: 14, color: colors.text, align: "right", rtlMode: true 
        });
      });

      slide10.addText(`تحليل شامل بناءً على ${presentationData.totalComplaints} شكوى عميل`, { 
        x: 1, y: 5.5, w: 8, h: 0.4, 
        fontSize: 16, color: colors.muted, align: "center" 
      });

      // Export
      await pptx.writeFile({ fileName: "VOC_Analysis_تحليل_صوت_العميل.pptx" });
      
      toast.dismiss();
      toast.success("تم تصدير العرض التقديمي بنجاح!");
    } catch (error) {
      toast.dismiss();
      toast.error("حدث خطأ أثناء التصدير");
      console.error("Export error:", error);
    }
  };

  return { exportToPowerPoint };
};
