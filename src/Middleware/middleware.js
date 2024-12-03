import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "admin";

export function middleware(req) {
    const token = req.cookies.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/Login", req.url));
    }

    try {
        jwt.verify(token, "admin");
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/home"], };
