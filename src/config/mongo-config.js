import { config } from "dotenv";
import mongoose from "mongoose";
config();

const mongoDomain = process.env.mongoDB;
export async function mongoSetup() {
  try {
    await mongoose.connect(mongoDomain);
    await mongoose.set("strictQuery", false);
    console.log("MongoDB Conectado com Sucesso");
  } catch (error) {
    console.log("Erro ao Conectar ao MongoDB: ", error);
  }
}
