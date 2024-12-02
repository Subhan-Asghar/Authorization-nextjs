import connect from "@/MongoDB/mongodb";
import User from "@/Model/model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        await connect();
        const body=await req.json();
        const{name,email,password}=body;
        User.create({
            name,
            email,
            password
        })
        return NextResponse.json({
            message:"User created ",
            
        },{status:201})

        


    }catch(err){
        console.log("Error",err);
        return NextResponse.json({
            message:"Not created ",
            
        },{status:400})

    }
}