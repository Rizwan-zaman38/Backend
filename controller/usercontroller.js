import { User } from "../modal/usermodal.js";
import bcrypt from 'bcrypt'

export const register = async(req,res)=>{
   try {
    const {name,email,password}= req.body;

    if(!name||!email||!password){
        // return res.send('Please fill all the fields')
        return res.status(400).json({message: "Please fill all the fields."});
    }
const hashpassword = await bcrypt.hash(password,10)

    const user = await User.create({
        name,
        email,
        password: hashpassword
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

export const login = async(req,res)=>{
    try {
        const{email,password} = req.body;

    if(!email||!password){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({message: "User not found."});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(401).json({message: "Invalid credentials."});
    }
 
    res.json({
        message: 'Loggin successfully.',
        user,
    })

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Server error."});
    }
}