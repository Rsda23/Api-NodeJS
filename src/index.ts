import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app
  .listen(PORT, () => {
    console.log(`Server currently listening on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
