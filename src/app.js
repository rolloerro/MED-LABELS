import express from "express";
import labelRoute from "./routes/label.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "MED-LABELS",
    status: "running",
    endpoints: {
      generate: "POST /label"
    }
  });
});

app.use("/label", labelRoute);

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`MED-LABELS running on http://localhost:${PORT}`);
});
