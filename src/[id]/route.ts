import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import Project from "../../models/Projects";
import mongoose from "mongoose";

interface Params {
  params: { id: string };
}

/* ========================= UPDATE PROJECT ========================= */
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await dbConnect();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid project id" },
        { status: 400 }
      );
    }

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

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

    /* -------- Image Update -------- */
    if (imageBase64 && imageMime) {
      if (project.imagePublicId) {
        await cloudinary.uploader.destroy(project.imagePublicId);
      }

      const imgUpload = await cloudinary.uploader.upload(
        `data:${imageMime};base64,${imageBase64}`,
        { folder: "projects/images", resource_type: "image" }
      );

      project.imageUrl = imgUpload.secure_url;
      project.imagePublicId = imgUpload.public_id;
    }

    /* -------- Video Update -------- */
    if (videoBase64 && videoMime) {
      if (project.videoPublicId) {
        await cloudinary.uploader.destroy(project.videoPublicId, {
          resource_type: "video",
        });
      }

      const vidUpload = await cloudinary.uploader.upload(
        `data:${videoMime};base64,${videoBase64}`,
        { folder: "projects/videos", resource_type: "video" }
      );

      project.videoUrl = vidUpload.secure_url;
      project.videoPublicId = vidUpload.public_id;
    }

    /* -------- Other Fields -------- */
    if (title) project.title = title;
    if (description) project.description = description;
    if (technologies) project.technologies = technologies;
    if (link) project.link = link;

    await project.save();

    return NextResponse.json(
      { success: true, message: "Project updated successfully", project },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("PUT /projects/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ========================= DELETE PROJECT ========================= */
export async function DELETE(_: NextRequest, { params }: Params) {
  try {
    await dbConnect();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid project id" },
        { status: 400 }
      );
    }

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    /* -------- Delete from Cloudinary -------- */
    if (project.imagePublicId) {
      await cloudinary.uploader.destroy(project.imagePublicId);
    }

    if (project.videoPublicId) {
      await cloudinary.uploader.destroy(project.videoPublicId, {
        resource_type: "video",
      });
    }

    await project.deleteOne();

    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("DELETE /projects/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
