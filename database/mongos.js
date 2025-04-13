import mongoose from "mongoose";

export const connnectDb = async (req,res) =>{
 try {
    mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB Error:", err);
});
 } catch (error) {
    console.log(error);
    
 }
}