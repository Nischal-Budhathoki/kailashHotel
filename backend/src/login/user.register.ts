import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { createUserSchema } from '../zodValidation/userValidation';
import "dotenv/config"
import { success } from 'zod';
import { prisma } from '../config/prisma';
import { Role } from "../generated/prisma/enums";
import { hashPassword } from '../utils/password';

type AuthService = {
    user:string,
    password:string
}

export const userRegistration = async (
    req:Request,
    res:Response,
) =>{
   try {
    //get all information from the schema file
    const result = await createUserSchema.safeParse(req.body);

    //if result doesn't received by database-server
    if(!result.success){
        return res.status(404).json({
            success:false,
            message:"User details not received",
            error:result.error.flatten(),
        })
    }

    //destructuring the data now
    const { name, email, password, role } = result.data;

    //checking if the user exists.
    const existingUser = await prisma.user.findUnique({
        where:{ email },
    });

    //if existing user
    if(existingUser){
        return res.status(409).json({
            success:false,
            message:"User already Exists, create a new record",
        })
    }

    //hash the password
    bcrypt.hash(password, 10);

    //now create a new user 
    const createdUser = await prisma.user.create({
        data:{
            name,
            email,
            role,
            password:hashPassword,
        },
    })

   

    //if all sucess, finally the response 
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: createdUser,
    });   
   } catch (error) {
     return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
   }

}