import mongoose from "mongoose";
export const connectDB = async () => {
  // siempre va el try catch en las conexiones a la base de datos
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/PAlaciodelCOlesterol-master"
    );
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
