import  {Request, Response}  from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { prisma } from "../config/prisma";
import { Role } from "../generated/prisma";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const loginUser = async (
    email:string,
    password:string,
    
) =>{
            //find the user
            const user = await prisma.user.findUnique({
                where:{email: email},
            })

        //if wrond user email
        if(!user){
            throw new Error("Invalid Credentials");
        }

        //comparing the password
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        // if not matched
        if(!isPasswordMatched){
            throw new Error("Password didn't matched, Try Again !!!");
        }

        //generate the token
        const token = jwt.sign(
            {
                userId : user.id,
                role:user.role
            }, 
            JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        return{ user, token }
}

export const loginController = async(
    req:Request,
    res:Response
)=>{
    try {
        //getting email and password from the user
        const { email, password } = req.body;

            //if anyone or both are incorrect
        if(!email || !password){
        return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
        };

        const result = await loginUser(email, password);

        //if all sucess
        return res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: result.user,
    });


        
    } catch (error:any) {
        return res.status(401).json({
      success: false,
      message: error.message,
    });
    }
}