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

app.listen(3004, () => {
  console.log("MED-LABELS running on http://localhost:3004");
});
