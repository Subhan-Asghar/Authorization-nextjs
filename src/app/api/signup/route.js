import connect from "@/MongoDB/mongodb";
import User from "@/Model/model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "admin";

export async function POST(req) {
    try{
        await connect();
        const body=await req.json();
        const{name,email,password}=body;
        const hashedPassword=await bcrypt.hash(password,10)
        const user=User.create({
            name,
            email,
            password:hashedPassword
        })
        const token =jwt.sign({
            id:user._id,
            name:user.name,
            password:user.password,

        }, JWT_SECRET, {
            expiresIn: "1h",
        });
        return NextResponse.json({
            message:"User created ",
            token,
        },{status:201})

        


    }catch(err){
        console.log("Error",err);
        return NextResponse.json({
            message:"Not created ",
            
        },{status:400})

    }
}