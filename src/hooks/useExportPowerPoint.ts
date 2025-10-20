import PptxGenJS from "pptxgenjs";

export const useExportPowerPoint = () => {
  const exportToPowerPoint = async () => {
    const pptx = new PptxGenJS();
    pptx.layout = "LAYOUT_16x9";
    pptx.author = "الرمز العقارية";
    pptx.title = "تحليل صوت العميل (VOC)";

    // Slide 1: Cover
    const slide1 = pptx.addSlide();
    slide1.background = { color: "1a1f2e" };
    slide1.addText("تحليل صوت العميل (VOC)", { x: 1, y: 2, w: 8, h: 1, fontSize: 44, bold: true, color: "FFFFFF", align: "center" });
    slide1.addText("Voice of the Customer Analysis", { x: 1, y: 3, w: 8, h: 0.5, fontSize: 24, color: "94a3b8", align: "center" });

    // Add more slides would go here based on the data
    // This is a basic implementation
    
    await pptx.writeFile({ fileName: "VOC_Analysis.pptx" });
  };

  return { exportToPowerPoint };
};
