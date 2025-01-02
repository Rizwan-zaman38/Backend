import { User } from "../modal/usermodal.js";

export const register = async(req,res)=>{
   try {
    const {name,email,password}= req.body;

    if(!name||!email||!password){
        // return res.send('Please fill all the fields')
        return res.status(400).json({message: "Please fill all the fields."});
    }

    const user = await User.create({
        name,
        email,
        password
    });

    res.json({
        message: "Registerd successfully.",
        user,
    });
    
   } catch (error) {
       console.error(error);
       return res.status(500).json({message: "Server error"})
   }
}