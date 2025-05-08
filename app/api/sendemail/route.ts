import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/app/SendMail";

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, message } = await request.json();
        
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const result = await sendMail({ name, email, company, message });
        
        if (!result.success) {
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in sendemail route:', error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

