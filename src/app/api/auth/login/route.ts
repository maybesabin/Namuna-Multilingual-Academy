import connectToDb from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    await connectToDb();
    const { email, password } = await req.json();

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "User doesn't exist with this email." },
                { status: 400 }
            )
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return NextResponse.json({ message: "Passwords do not match." }, { status: 400 })
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        )

        return NextResponse.json({ message: "Logged in successfully!", token })
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
