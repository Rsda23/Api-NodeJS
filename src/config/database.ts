import mongoose from "mongoose";


const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
    console.log("MongoDB reussi");
  } catch (error) {
    console.log("MongoDB echoue", error);
    process.exit(1);
  }
};

export default connection;