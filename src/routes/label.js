import express from "express";
import { generateLabelPDF } from "../services/generateLabelPDF.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { type, data } = req.body;

  if (!type || !data) {
    return res.status(400).json({ error: "type and data required" });
  }

  const pdfBuffer = await generateLabelPDF(type, data);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=label.pdf");
  res.send(pdfBuffer);
});

export default router;
