
import mongoose from 'mongoose';
export const Connection = async (URL) => {


  try{

await mongoose.connect(URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Database Connected Succesfully");
  }catch(err){
    console.log(`Error while connecting the database`);
  }
}

export default Connection;
