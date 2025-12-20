import PDFDocument from "pdfkit";
import { templates } from "../utils/labelTemplates.js";

export function generateLabelPDF(type, data) {
  return new Promise((resolve) => {
    const template = templates[type];
    const doc = new PDFDocument({
      size: [template.width, template.height],
      margin: 10
    });

    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => resolve(Buffer.concat(buffers)));

    doc.fontSize(14).text(template.title, { align: "center" });
    doc.moveDown();

    Object.entries(data).forEach(([key, value]) => {
      doc.fontSize(10).text(`${key}: ${value}`);
    });

    doc.end();
  });
}
