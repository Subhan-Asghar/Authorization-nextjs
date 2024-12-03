import connect from "@/MongoDB/mongodb";
import User from "@/Model/model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CORS from "cors"



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
        const response = NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: "production",
            maxAge: 3600, 
        });
        return response
        


    }catch(err){
        console.log("Error",err);
        return NextResponse.json({
            message:"Not created ",
            
        },{status:400})

    }
}