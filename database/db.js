import mongoose from 'mongoose';

export const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Error while connecting to the database:", err);
  }
}

export default Connection;
