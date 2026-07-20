import connectToDb from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
    await connectToDb();
    const { email, password, role } = await req.json();

    if (!email || email.length < 10) {
        return NextResponse.json({ message: "Email should be at least 10 characters." }, { status: 400 })
    }


    if (!password || password.length < 5) {
        return NextResponse.json({ message: "Password should be at least 10 characters." }, { status: 400 })
    }

    try {
        const user = await User.findOne()
        if (user) {
            return NextResponse.json({ message: "User already exists." }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: hashedPassword,
            role: role || "admin"
        })

        await newUser.save()
        return NextResponse.json({ message: "User created successfully!" })
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            return NextResponse.json({ message: err.message }, { status: 500 });
        } else {
            console.log("Unknown error occurred");
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        }
    }
}
