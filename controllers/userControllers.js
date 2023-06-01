import User from "../model/user-schema.js";

const userSignup = async (request, response) => {
 try{
    const exist=await User.findOne({username: request.body.username});
    if(exist){
        return response.status(401).json(({message: 'Username already exist'}));
    }
const userData= request.body;
const newUser=new User(userData);
await newUser.save();
response.status(200).json({message: userData});
 }catch(error){
response.status(500).json({message: error});
 }
}


const userLogin= async(request, response)=>{
    console.log("hello");
    try{
        const username=request.body.username;
        const password=request.body.password;
        let user= await User.findOne({username: username, password: password});

        if(user){
            return response.status(200).json({data: user});
           
        }
        else{
            return response.status(401).json("invalid login");
                }


    }catch(error){
        response.status(500).json({message: error});  
    }


}
export { userSignup, userLogin };