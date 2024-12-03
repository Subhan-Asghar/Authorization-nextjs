import connect from "@/MongoDB/mongodb";
import User from "@/Model/model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 

const JWT_SECRET="admin";


export async function POST(req){
    await connect();
    try{
        const body=await req.json();
        const {email,password}=body;
        const user = await User.findOne({email});
        const isValid= await bcrypt.compare(password,user.password);

        if(isValid){
            const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
                expiresIn: "1h",
            });
            const response = NextResponse.json(
                { message: "Login successful" },
                { status: 200 }
            );
            response.cookies.set("token", token, {
                httpOnly: true,
                secure:"production",
                maxAge: 3600, 
            });
            return response
        }
        else{
            return  NextResponse.json({
                Message:"User Password is Incorrect"
              })
        }

    }catch(err){
       return  NextResponse.json({
            Message:"User not found"
        })
    }
}