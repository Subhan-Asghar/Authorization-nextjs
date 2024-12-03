import connect from "@/MongoDB/mongodb";
import User from "@/Model/model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 

const JWT_SECRET="admin";


export async function GET(req){
    await connect();
    try{
        const body=await req.json();
        const {email,password}=body;
        const result =User.findOne({email});
        const isValid=bcrypt.compare(result.password,password);

        if(isValid){
          return  NextResponse.json({
            Message:"User"
          })
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