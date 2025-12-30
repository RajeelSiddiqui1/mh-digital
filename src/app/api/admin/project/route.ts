import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import Project from "../../../../../models/Projects";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json();

        const {
            title,
            description,
            imageBase64,
            imageMime,
            videoBase64,
            videoMime,
            technologies,
            link,
        } = body;

        // ---------------- Validation ----------------
        if (
            !title ||
            !imageBase64 ||
            !imageMime ||
            !videoBase64 ||
            !videoMime ||
            !technologies ||
            !link
        ) {
            return NextResponse.json(
                { success: false, message: "Required fields are missing" },
                { status: 400 }
            );
        }

        // ---------------- Upload Image ----------------
        const imageUpload = await cloudinary.uploader.upload(
            `data:${imageMime};base64,${imageBase64}`,
            {
                folder: "projects/images",
                resource_type: "image",
            }
        );

        // ---------------- Upload Video ----------------
        const videoUpload = await cloudinary.uploader.upload(
            `data:${videoMime};base64,${videoBase64}`,
            {
                folder: "projects/videos",
                resource_type: "video",
            }
        );

        // ---------------- Save Project ----------------
        const project = await Project.create({
            title,
            description,
            imageUrl: imageUpload.secure_url,
            imagePublicId: imageUpload.public_id,
            videoUrl: videoUpload.secure_url,
            videoPublicId: videoUpload.public_id,
            technologies,
            link,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Project created successfully",
                project,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("POST /projects error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message,
            },
            { status: 500 }
        );
    }
}


export async function GET() {
    try {
        await dbConnect()

        const projects = await Project.find()
        if (!projects) {
            return NextResponse.json(
                { success: false, message: "Project not found" },
                { status: 400 }
            )
        }

        return NextResponse.json({
            project:projects,
            success:true
        },{
            status:200
        })
    } catch (error:any) {
        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message,
            },
            { status: 500 }
        );
    }
}